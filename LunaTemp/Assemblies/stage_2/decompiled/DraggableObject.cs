using UnityEngine;

public class DraggableObject : MonoBehaviour
{
	[SerializeField]
	private float objectZPosition;

	private Vector3 offsetHeightVec;

	private Vector3 offset = new Vector3(0.165f, -0.5f, -0.285f);

	private Box originalBox;

	private bool isDragging = false;

	private Camera cam;

	private void Start()
	{
		cam = Camera.main;
		offsetHeightVec = Vector3.down * GetComponent<Collider>().bounds.size.y / 2f;
	}

	private void Update()
	{
		DragObject();
	}

	private void OnMouseDown()
	{
		isDragging = true;
		originalBox = base.transform.parent.GetComponent<Box>();
	}

	private void OnMouseUp()
	{
		isDragging = false;
		SoundManager.Instance.Play("MouseUpSound");
		Ray ray = cam.ScreenPointToRay(Input.mousePosition);
		RaycastHit[] hits = Physics.RaycastAll(ray);
		RaycastHit[] array = hits;
		for (int i = 0; i < array.Length; i++)
		{
			RaycastHit hit = array[i];
			if (hit.collider.gameObject == base.gameObject)
			{
				continue;
			}
			Box targetBox = hit.collider.GetComponent<Box>();
			if (targetBox != null && !targetBox.HasGoods)
			{
				if (originalBox != null)
				{
					originalBox.SetGoods(0);
				}
				base.transform.SetParent(targetBox.transform);
				base.transform.position = targetBox.transform.position + offset;
				targetBox.SetGoods(GetComponent<Goods>().ID);
				return;
			}
		}
		base.transform.position = originalBox.transform.position + offset;
	}

	private void DragObject()
	{
		if (isDragging)
		{
			Vector3 targetPos = GetMouseWorldPos() + offsetHeightVec;
			targetPos.z = objectZPosition;
			base.transform.position = targetPos;
		}
	}

	private Vector3 GetMouseWorldPos()
	{
		Vector3 mousePoint = Input.mousePosition;
		mousePoint.z = cam.WorldToScreenPoint(base.transform.position).z;
		return cam.ScreenToWorldPoint(mousePoint);
	}
}
