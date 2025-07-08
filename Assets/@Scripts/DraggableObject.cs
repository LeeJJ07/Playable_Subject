using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DraggableObject : MonoBehaviour
{
    [SerializeField] private float objectZPosition;
    private Vector3 offsetHeightVec;
    private Vector3 offset = new Vector3(0.165f, -0.5f, -0.285f);

    private Box originalBox;

    private bool isDragging = false;
    private Camera cam;

    private void Start()
    {
        cam = Camera.main;

        offsetHeightVec = Vector3.down * GetComponent<Collider>().bounds.size.y / 2.0f;
    }

    private void Update()
    {
        DragObject();
    }

    private void OnMouseDown()
    {
        isDragging = true;
        originalBox = transform.parent.GetComponent<Box>();
    }

    private void OnMouseUp()
    {
        isDragging = false;

        SoundManager.Instance.Play("MouseUpSound");

        Ray ray = cam.ScreenPointToRay(Input.mousePosition);
        RaycastHit[] hits = Physics.RaycastAll(ray);

        foreach (var hit in hits)
        {
            if (hit.collider.gameObject == gameObject)
                continue;

            Box targetBox = hit.collider.GetComponent<Box>();
            if (targetBox != null && !targetBox.HasGoods)
            {
                if (originalBox != null)
                    originalBox.SetGoods(0);

                transform.SetParent(targetBox.transform);
                transform.position = targetBox.transform.position + offset;

                targetBox.SetGoods(GetComponent<Goods>().ID);
                return;
            }
        }

        transform.position = originalBox.transform.position + offset;
    }


    private void DragObject()
    {
        if (!isDragging)
            return;

        Vector3 targetPos = GetMouseWorldPos() + offsetHeightVec;
        targetPos.z = objectZPosition;
        transform.position = targetPos;
    }

    private Vector3 GetMouseWorldPos()
    {
        Vector3 mousePoint = Input.mousePosition;
        mousePoint.z = cam.WorldToScreenPoint(transform.position).z;

        return cam.ScreenToWorldPoint(mousePoint);
    }

}
