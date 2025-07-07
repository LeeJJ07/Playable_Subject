using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static UnityEngine.Rendering.DebugUI.Table;

public class BoxController: MonoBehaviour
{
    [SerializeField] private Vector3 startPosition;
    [SerializeField] private float spacingX;

    [SerializeField] private int floorCount = 9;
    [SerializeField] private GameObject boxPrefab;

    private List<Transform> floors;
    private float boxWidth;
    private float boxHeight;
    
    void Start()
    {
        Initialize();
    }
    
    private void Initialize()
    {
        floors = new List<Transform>();
        SetBoxSize();

        GenerateFloorsAndBoxes();
    }

    private void SetBoxSize()
    {
        BoxCollider collider = boxPrefab.GetComponent<BoxCollider>();
        Vector3 scale = boxPrefab.transform.localScale;

        boxWidth = collider.size.x * scale.x;
        boxHeight = collider.size.y * scale.y;
    }
    private void GenerateFloorsAndBoxes()
    {
        for(int row = 0; row < floorCount; row++)
        {
            float startX = -(boxWidth + spacingX) * row / 2.0f;
            float height = -boxHeight * row + startPosition.y;

            GameObject floor = new GameObject($"Floor{row + 1}");
            floor.transform.parent = this.transform;
            floor.transform.localPosition = new Vector3(0.0f, height, 0.0f);
            floors.Add(floor.transform);

            for(int boxIndex = 0; boxIndex < row + 1; boxIndex++)
            {
                Vector3 pos = new Vector3(startX + boxIndex * (spacingX + boxWidth), 0.0f, 0.0f);
                GameObject box = Instantiate(boxPrefab, floor.transform);
                box.transform.localPosition = pos;
            }
        }
    }
}
