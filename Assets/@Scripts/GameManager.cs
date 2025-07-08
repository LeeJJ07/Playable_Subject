using UnityEngine;

public class GameManager : MonoBehaviour
{

    public int FloorCount { get { return floorCount; } }
    [SerializeField] private int floorCount = 9;
    
    private int clearFloorCount = 0;

    private static GameManager instance;
    public static GameManager Instance
    {
        get
        {
            if (instance == null)
            {
                instance = FindObjectOfType<GameManager>();
                if (instance == null)
                {
                    GameObject gameManager = new GameObject("GameManager");
                    instance = gameManager.AddComponent<GameManager>();
                    DontDestroyOnLoad(gameManager);
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
            DontDestroyOnLoad(gameObject);
        }
        else if (instance != this)
        {
            Destroy(gameObject);
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

        if (clearFloorCount != floorCount)
            return;

        Luna.Unity.LifeCycle.GameEnded();
    }

}

