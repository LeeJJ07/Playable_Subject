using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DraggableObject : MonoBehaviour
{
    private Vector3 prevPos;
    private bool isDragging = false;
    private Camera cam;

    private void Start()
    {
        cam = Camera.main;
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

        transform.position = GetMouseWorldPos();

    }

    private Vector3 GetMouseWorldPos()
    {
        Vector3 mousePoint = Input.mousePosition;
        mousePoint.z = cam.WorldToScreenPoint(transform.position).z;

        return cam.ScreenToWorldPoint(mousePoint);
    }

}
