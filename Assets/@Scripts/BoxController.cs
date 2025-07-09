using System.Collections;
using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
using UnityEngine;

public class BoxController: MonoBehaviour
{
    [SerializeField] private Ease ease;
    [SerializeField] private float dropDuration = 2.0f;

    [SerializeField] private Vector3 startPosition;
    [SerializeField] private float boxWidth;
    [SerializeField] private float boxHeight;
    [SerializeField] private float spacingX;

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
    
    private void Start()
    {
        ShuffleGoods();
        SetGoodsInBox();
    }
    private void Initialize()
    {
        floors = new List<Transform>();
        boxes = new List<GameObject>();
        goods = new int[(1 + GameManager.Instance.FloorCount) * GameManager.Instance.FloorCount / 2];

        Box.OnGoodsPlaced += ClearFloor;

        GenerateFloorsAndBoxes();
    }
    private void GenerateFloorsAndBoxes()
    {
        for(int row = 0; row < GameManager.Instance.FloorCount; row++)
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
        for(int floor = 1; floor < GameManager.Instance.FloorCount - 1; floor++)
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
            box.SetGoods(goods[boxIndex]);
        }
    }

    private void ClearFloor(Box box)
    {
        Transform floor = box.transform.parent;
        Box[] boxesOnFloor = floor.GetComponentsInChildren<Box>();

        if (!boxesOnFloor.All(b => b.HasGoods && b.GoodsID == b.ColorID))
            return;

        GameManager.Instance.OnFloorCleared(floor.transform.position);

        foreach (var b in boxesOnFloor)
        {
            b.transform.GetChild(0).gameObject.SetActive(false);
            b.gameObject.SetActive(false);
        }
        floor.gameObject.SetActive(false);

        DropUpperFloors(floor);

        floors.Remove(floor);
    }
    private void DropUpperFloors(Transform floor)
    {
        for (int curFloor = 0; curFloor < floors.Count - 1; curFloor++)
        {
            if (floors[curFloor] == floor)
                break;

            int nextFloor = curFloor + 1;
            floors[curFloor].DOMoveY(floors[nextFloor].position.y, dropDuration).SetEase(ease);
        }
    }
}
