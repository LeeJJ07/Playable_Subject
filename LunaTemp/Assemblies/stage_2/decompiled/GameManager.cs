using Luna.Unity;
using UnityEngine;

public class GameManager : MonoBehaviour
{
	[SerializeField]
	private int floorCount = 9;

	private int clearFloorCount = 0;

	private static GameManager instance;

	public int FloorCount => floorCount;

	public static GameManager Instance
	{
		get
		{
			if (instance == null)
			{
				instance = Object.FindObjectOfType<GameManager>();
				if (instance == null)
				{
					GameObject gameManager = new GameObject("GameManager");
					instance = gameManager.AddComponent<GameManager>();
					Object.DontDestroyOnLoad(gameManager);
				}
			}
			return instance;
		}
	}

	private void Awake()
	{
		if (instance == null)
		{
			instance = this;
			Object.DontDestroyOnLoad(base.gameObject);
		}
		else if (instance != this)
		{
			Object.Destroy(base.gameObject);
		}
		Initialize();
	}

	private void Start()
	{
		SoundManager.Instance.Play("BackGroundMusic", ESoundType.BGM);
	}

	private void Initialize()
	{
		SoundManager.Instance.Initialize();
	}

	public void OnFloorCleared()
	{
		clearFloorCount++;
		SoundManager.Instance.Play("ClearSound");
		if (clearFloorCount == floorCount)
		{
			LifeCycle.GameEnded();
		}
	}
}
