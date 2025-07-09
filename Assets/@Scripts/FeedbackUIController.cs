using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using TMPro;
using UnityEngine;
public class FeedbackUIController : MonoBehaviour
{
    [SerializeField] private GameObject guidePanel; 
    [SerializeField] private TextMeshProUGUI guideText; 
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
}
