using UnityEngine;

public class GameManager : MonoBehaviour
{
    [SerializeField] private FeedbackUIController feedbackUIController;

    private bool isGuidePopupOn = true;
    private bool isMotionDetected = false;
    private float inactivityTimer = 0.0f;
    private float inactivityTime = 5.0f;

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

        feedbackUIController.OnEnableGuideUI();
    }
    private void Update()
    {
        OnTimer();
    }

    private void OnTimer()
    {
        if (isMotionDetected || isGuidePopupOn)
            return;

        inactivityTimer += Time.deltaTime;
        if(inactivityTimer > inactivityTime)
        {
            feedbackUIController.OnEnableGuideUI();
            isGuidePopupOn = true;
            inactivityTimer = 0.0f;
        }
    }
    public void IsMotionDetect(bool isMotionDetect)
    {
        isMotionDetected = isMotionDetect;

        if (!isMotionDetected)
            return;

        inactivityTimer = 0.0f;
        feedbackUIController.OnDisableGuideUI();
        isGuidePopupOn = !isMotionDetect;
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

