using System.Collections.Generic;
using UnityEngine;
public enum ESoundType
{
    BGM,
    EFFECT,
    MAX_COUNT,
}

public class SoundManager : MonoBehaviour
{
    private static SoundManager instance;
    public static SoundManager Instance
    {
        get
        {
            if(instance == null)
            {
                instance = FindObjectOfType<SoundManager>();
                if(instance == null)
                {
                    GameObject soundManager = new GameObject("SoundManager");
                    instance = soundManager.AddComponent<SoundManager>();
                    DontDestroyOnLoad(soundManager);
                }
            }
            return instance;
        }
    }

    private AudioSource[] audioSources = new AudioSource[(int)ESoundType.MAX_COUNT];
    private Dictionary<string, AudioClip> audioClips = new Dictionary<string, AudioClip>();

    private void Awake()
    {
        if(instance == null)
        {
            instance = this;
            DontDestroyOnLoad(gameObject);
            Initialize();
        }else if(instance != this)
        {
            Destroy(gameObject);
        }
    }

    public void Initialize()
    {
        GameObject root = GameObject.Find("@Sound");
        if(root == null)
        {
            root = new GameObject { name = "@Sound" };
            Object.DontDestroyOnLoad(root);

            string[] soundNames = System.Enum.GetNames(typeof(ESoundType));
            for(int idx = 0; idx < soundNames.Length - 1; idx++)
            {
                GameObject go = new GameObject { name = soundNames[idx] };
                audioSources[idx] = go.AddComponent<AudioSource>();
                go.transform.parent = root.transform;
            }

            audioSources[(int)ESoundType.BGM].loop = true;
        }
    }

    public void Play(AudioClip clip, ESoundType type = ESoundType.EFFECT, float volume = 1.0f)
    {
        if (clip == null)
            return;
        if (type == ESoundType.EFFECT)
        {
            AudioSource audioSource = audioSources[(int)ESoundType.EFFECT];
            if (audioSource.isPlaying)
            {
                audioSource.Stop();
            }
            audioSource.volume = volume;
            audioSource.PlayOneShot(clip);
        }
        else
        {
            AudioSource audioSource = audioSources[(int)ESoundType.BGM];
            audioSource.volume = volume;
            audioSource.clip = clip;
            audioSource.Play();
        }
    }
    public void Play(string path, ESoundType type = ESoundType.EFFECT, float volume = 1.0f)
    {
        AudioClip audioClip = GetOrAddAudioClip(path, type);
        Play(audioClip, type, volume);
    }

    AudioClip GetOrAddAudioClip(string path, ESoundType type = ESoundType.EFFECT)
    {
        if (path.Contains("Sounds") == false)
            path = $"Sounds/{path}";

        AudioClip audioClip = null;

        if (type == ESoundType.BGM)
        {
            Debug.Log($"Trying to load: {path}");
            audioClip = Resources.Load<AudioClip>(path);
            Debug.Log(audioClip != null ? "Loaded successfully!" : "Failed to load.");
        }
        else
        {
            if (audioClips.TryGetValue(path, out audioClip) == false)
            {
                audioClip = Resources.Load<AudioClip>(path);
                audioClips.Add(path, audioClip);
            }
        }

        if (audioClip == null)
            Debug.Log($"AudioClip Missing ! {path}");

        return audioClip;
    }
}
