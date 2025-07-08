using System.Collections;
using System.Collections.Generic;
using UnityEngine;
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
    
    void Awake()
    {
        Initialize();
    }
    
    private void Initialize()
    {
        floors = new List<Transform>();

        GenerateFloorsAndBoxes();
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

                GenerateBox(row, floor.transform, generatePosition);
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
    private void GenerateBox(int row, Transform floorTrans, Vector3 generatePosition)
    {
        GameObject box = Instantiate(boxPrefab, floorTrans);
        box.transform.localPosition = generatePosition;
        box.GetComponent<MeshRenderer>().sharedMaterial = floorMaterials[row];

        box.GetComponent<Box>().ColorID = row;
        if (row == 0)
            return;

        box.GetComponent<Box>().SetGoodsMaterial(goodsMaterials[row - 1]);
    }
}
