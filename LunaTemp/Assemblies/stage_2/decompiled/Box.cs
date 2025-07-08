using System;
using System.Collections;
using UnityEngine;

public class Box : MonoBehaviour
{
	[SerializeField]
	private GameObject goodsPrefab;

	private Material goodsMaterial;

	private int colorID = 0;

	[SerializeField]
	private int goodsID = 0;

	private Vector3 offset = new Vector3(0.1f, -0.3f, -0.15f);

	private float waitSecond = 0.2f;

	public int ColorID
	{
		get
		{
			return colorID;
		}
		set
		{
			colorID = value;
		}
	}

	public int GoodsID => goodsID;

	public bool HasGoods => goodsID > 0;

	public static event Action<Box> OnGoodsPlaced;

	private void Start()
	{
		StartCoroutine(GenerateGoods());
	}

	private IEnumerator GenerateGoods()
	{
		yield return new WaitForSeconds(waitSecond);
		if (ColorID != 0)
		{
			GameObject goods = UnityEngine.Object.Instantiate(goodsPrefab, base.transform.position + offset, base.transform.rotation, base.transform);
			goods.GetComponent<MeshRenderer>().sharedMaterial = goodsMaterial;
			goods.GetComponent<Goods>().ID = goodsID;
		}
	}

	public void SetGoodsMaterial(Material mat)
	{
		goodsMaterial = mat;
	}

	public void SetGoods(int goodsID)
	{
		this.goodsID = goodsID;
		Box.OnGoodsPlaced?.Invoke(this);
	}
}
