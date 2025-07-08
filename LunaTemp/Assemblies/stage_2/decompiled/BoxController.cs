using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
using UnityEngine;

public class BoxController : MonoBehaviour
{
	[SerializeField]
	private Ease ease;

	[SerializeField]
	private float dropDuration = 2f;

	[SerializeField]
	private Vector3 startPosition;

	[SerializeField]
	private float boxWidth;

	[SerializeField]
	private float boxHeight;

	[SerializeField]
	private float spacingX;

	[SerializeField]
	private int floorCount = 9;

	[SerializeField]
	private GameObject boxPrefab;

	[SerializeField]
	private Material[] floorMaterials;

	[SerializeField]
	private Material[] goodsMaterials;

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
		goods = new int[(1 + floorCount) * floorCount / 2];
		Box.OnGoodsPlaced += ClearFloor;
		GenerateFloorsAndBoxes();
	}

	private void GenerateFloorsAndBoxes()
	{
		for (int row = 0; row < floorCount; row++)
		{
			float startX = (0f - (boxWidth + spacingX)) * (float)row / 2f;
			float height = (0f - boxHeight) * (float)row + startPosition.y;
			GameObject floor = GenerateFloor(row, height);
			for (int boxIndex = 0; boxIndex < row + 1; boxIndex++)
			{
				Vector3 generatePosition = new Vector3(startX + (float)boxIndex * (spacingX + boxWidth), 0f, 0f);
				GenerateBox(row, boxIndex, floor.transform, generatePosition);
			}
		}
	}

	private GameObject GenerateFloor(int row, float height)
	{
		GameObject floor = new GameObject($"Floor{row + 1}");
		floor.transform.parent = base.transform;
		floor.transform.localPosition = new Vector3(0f, height, 0f);
		floors.Add(floor.transform);
		return floor;
	}

	private void GenerateBox(int row, int boxIndex, Transform floorTrans, Vector3 generatePosition)
	{
		GameObject box = Object.Instantiate(boxPrefab, floorTrans);
		box.transform.localPosition = generatePosition;
		box.GetComponent<MeshRenderer>().sharedMaterial = floorMaterials[row];
		box.GetComponent<Box>().ColorID = row;
		goods[(1 + row) * row / 2 + boxIndex] = row;
		boxes.Add(box);
	}

	private void ShuffleGoods()
	{
		for (int floor = 1; floor < floorCount - 1; floor++)
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
		if (boxesOnFloor.All((Box b) => b.HasGoods && b.GoodsID == b.ColorID))
		{
			Box[] array = boxesOnFloor;
			foreach (Box b2 in array)
			{
				b2.transform.GetChild(0).gameObject.SetActive(false);
				b2.gameObject.SetActive(false);
			}
			floor.gameObject.SetActive(false);
			DropUpperFloors(floor);
			floors.Remove(floor);
		}
	}

	private void DropUpperFloors(Transform floor)
	{
		for (int curFloor = 0; curFloor < floors.Count - 1 && !(floors[curFloor] == floor); curFloor++)
		{
			int nextFloor = curFloor + 1;
			floors[curFloor].DOMoveY(floors[nextFloor].position.y, dropDuration).SetEase(ease);
		}
	}
}
