using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DraggableObject : MonoBehaviour
{
    [SerializeField] private float objectZPosition;
    private Vector3 offsetHeightVec;

    private Vector3 prevPos;
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
        prevPos = transform.position;
    }

    private void OnMouseUp() 
    {
        isDragging = false;
        transform.position = prevPos;
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
