using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UIElements;
using static UnityEditor.IMGUI.Controls.PrimitiveBoundsHandle;
using static UnityEditor.PlayerSettings;
using static UnityEngine.Rendering.DebugUI.Table;

public class BoxController: MonoBehaviour
{
    [SerializeField] private Vector3 startPosition;
    [SerializeField] private float boxWidth;
    [SerializeField] private float boxHeight;
    [SerializeField] private float spacingX;

    [SerializeField] private int floorCount = 9;
    [SerializeField] private GameObject boxPrefab;

    [SerializeField] private Material[] floorMaterials;
    [SerializeField] private Material[] goodsMaterials;

    private List<Transform> floors;
    private List<GameObject> boxes;
    private int[] goods;
    
    private void Awake()
    {
        Initialize();
    }
    
    private void Initialize()
    {
        floors = new List<Transform>();
        boxes = new List<GameObject>();
        goods = new int[(1 + floorCount) * floorCount / 2];

        GenerateFloorsAndBoxes();
    }
    private void Start()
    {
        ShuffleGoods();
        SetGoodsInBox();
    }
    private void GenerateFloorsAndBoxes()
    {
        for(int row = 0; row < floorCount; row++)
        {
            float startX = -(boxWidth + spacingX) * row / 2.0f;
            float height = -boxHeight * row + startPosition.y;

            GameObject floor = GenerateFloor(row, height);

            for(int boxIndex = 0; boxIndex < row + 1; boxIndex++)
            {
                Vector3 generatePosition = new Vector3(startX + boxIndex * (spacingX + boxWidth), 0.0f, 0.0f);

                GenerateBox(row, boxIndex, floor.transform, generatePosition);
            }
        }
    }
    private GameObject GenerateFloor(int row, float height)
    {
        GameObject floor = new GameObject($"Floor{row + 1}");
        floor.transform.parent = this.transform;
        floor.transform.localPosition = new Vector3(0.0f, height, 0.0f);
        floors.Add(floor.transform);

        return floor;
    }
    private void GenerateBox(int row, int boxIndex, Transform floorTrans, Vector3 generatePosition)
    {
        GameObject box = Instantiate(boxPrefab, floorTrans);
        box.transform.localPosition = generatePosition;
        box.GetComponent<MeshRenderer>().sharedMaterial = floorMaterials[row];

        box.GetComponent<Box>().ColorID = row;
        goods[(1 + row) * row / 2 + boxIndex] = row;

        boxes.Add(box);
    }

    private void ShuffleGoods()
    {
        for(int floor = 1; floor < floorCount - 1; floor++)
        {
            int nextFloorStartIndex = (floor + 2) * (floor + 1) / 2;
            int currentFloorStartInde = floor * (floor + 1) / 2;

            for (int currentBoxIndex = currentFloorStartInde; currentBoxIndex < currentFloorStartInde + floor + 1; currentBoxIndex++)
            {
                int swapTargetIndex = Random.Range(nextFloorStartIndex, goods.Length);

                int temp = goods[currentBoxIndex];
                goods[currentBoxIndex] = goods[swapTargetIndex];
                goods[swapTargetIndex] = temp;
            }
        }
    }

    private void SetGoodsInBox()
    {
        for (int boxIndex = 1; boxIndex < boxes.Count; boxIndex++)
        {
            Box box = boxes[boxIndex].GetComponent<Box>();
            box.SetGoodsMaterial(goodsMaterials[goods[boxIndex] - 1]);
            box.GoodsID = goods[boxIndex];
        }
    }

}
