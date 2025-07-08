using UnityEngine;

public class GameManager : MonoBehaviour
{
	private static GameManager instance;

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
}
