using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Box : MonoBehaviour
{
    [SerializeField] private GameObject goodsPrefab;

    private Material goodsMaterial;

    public int ColorID { get { return colorID; } set { colorID = value; } }
    private int colorID = 0;

    private Vector3 offset = new Vector3(0.1f, -0.3f, -0.15f);
    private float waitSecond = 0.2f;

    private void Start()
    {
        StartCoroutine(GenerateGoods());
    }

    private IEnumerator GenerateGoods()
    {
        yield return new WaitForSeconds(waitSecond);

        if (ColorID == 0)
            yield break;

        GameObject goods = Instantiate(goodsPrefab, transform.position + offset, transform.rotation, transform);
        goods.GetComponent<MeshRenderer>().sharedMaterial = goodsMaterial;
    }

    public void SetGoodsMaterial(Material mat)
    {
        goodsMaterial = mat;
    }

}
