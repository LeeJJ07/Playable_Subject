using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using TMPro;
using UnityEditor.Rendering.LookDev;
using UnityEngine;
using UnityEngine.UI;
public class FeedbackUIController : MonoBehaviour
{
    [SerializeField] private Camera mainCamera;

    [SerializeField] private GameObject guidePanel; 
    [SerializeField] private TextMeshProUGUI guideText;

    [SerializeField] private GameObject clearFloorPanel;
    [SerializeField] private RectTransform niceImageRect;
    [SerializeField] private Image niceImage;

    [SerializeField] private GameObject stageClearPanel;
    [SerializeField] private Image stageClearImage;

    private RectTransform guideTextRect; 
    private Vector2 guideTextStartPos;

    private Tween tween;
    private void Awake()
    {
        guideTextRect = guideText.rectTransform;
        guideTextStartPos = guideTextRect.anchoredPosition;
    }
    public void OnEnableGuideUI()
    {
        guidePanel.SetActive(true);

        tween?.Kill();

        guideTextRect.anchoredPosition = guideTextStartPos;

        tween = guideTextRect.DOAnchorPosY(guideTextStartPos.y + 14f, 0.8f)
            .SetEase(Ease.InOutSine)
            .SetLoops(-1, LoopType.Yoyo);
    }
    public void OnDisableGuideUI()
    {
        tween?.Kill();
        guidePanel.SetActive(false);
    }
    public void ShowNiceImageAtFloor(Vector3 floorPos)
    {
        clearFloorPanel.SetActive(true);

        Vector3 screenPos = mainCamera.WorldToScreenPoint(floorPos);
        niceImageRect.position = screenPos;

        niceImage.DOFade(1.0f, 0.2f)
        .OnComplete(() =>
        {
            niceImage.DOFade(0.0f, 0.8f)
                .SetDelay(0.6f)
                .OnComplete(() =>
                {
                    clearFloorPanel.SetActive(false);
                });
        });
    }

    public void ShowStageClearImage()
    {
        stageClearPanel.SetActive(true);
        stageClearImage.DOFade(1.0f, 0.4f);
    }
}
