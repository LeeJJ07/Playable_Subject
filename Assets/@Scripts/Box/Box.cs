using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Box : MonoBehaviour
{
    [SerializeField] private GameObject goodsPrefab;

    private Material goodsMaterial;

    public int ColorID { get { return colorID; } set { colorID = value; } }
    private int colorID = 0;
    public int GoodsID { get { return goodsID; }  }
    [SerializeField] private int goodsID = 0;
    public bool HasGoods { get { return goodsID > 0; } }

    private Vector3 offset = new Vector3(0.165f, -0.5f, -0.285f);
    private float waitSecond = 0.2f;

    public static event Action<Box> OnGoodsPlaced;

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
        goods.GetComponent<Goods>().ID = goodsID;
    }

    public void SetGoodsMaterial(Material mat)
    {
        goodsMaterial = mat;
    }
    public void SetGoods(int goodsID)
    {
        this.goodsID = goodsID;
        OnGoodsPlaced?.Invoke(this);
    }
}
