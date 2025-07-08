using System;
using System.Collections.Generic;
using UnityEngine;

public class SoundManager : MonoBehaviour
{
	private static SoundManager instance;

	private AudioSource[] audioSources = new AudioSource[2];

	private Dictionary<string, AudioClip> audioClips = new Dictionary<string, AudioClip>();

	public static SoundManager Instance
	{
		get
		{
			if (instance == null)
			{
				instance = UnityEngine.Object.FindObjectOfType<SoundManager>();
				if (instance == null)
				{
					GameObject soundManager = new GameObject("SoundManager");
					instance = soundManager.AddComponent<SoundManager>();
					UnityEngine.Object.DontDestroyOnLoad(soundManager);
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
			UnityEngine.Object.DontDestroyOnLoad(base.gameObject);
			Initialize();
		}
		else if (instance != this)
		{
			UnityEngine.Object.Destroy(base.gameObject);
		}
	}

	public void Initialize()
	{
		GameObject root = GameObject.Find("@Sound");
		if (root == null)
		{
			root = new GameObject
			{
				name = "@Sound"
			};
			UnityEngine.Object.DontDestroyOnLoad(root);
			string[] soundNames = Enum.GetNames(typeof(ESoundType));
			for (int idx = 0; idx < soundNames.Length - 1; idx++)
			{
				GameObject go = new GameObject
				{
					name = soundNames[idx]
				};
				audioSources[idx] = go.AddComponent<AudioSource>();
				go.transform.parent = root.transform;
			}
			audioSources[0].loop = true;
		}
	}

	public void Play(AudioClip clip, ESoundType type = ESoundType.EFFECT, float volume = 1f)
	{
		if (clip == null)
		{
			return;
		}
		if (type == ESoundType.EFFECT)
		{
			AudioSource audioSource2 = audioSources[1];
			if (audioSource2.isPlaying)
			{
				audioSource2.Stop();
			}
			audioSource2.volume = volume;
			audioSource2.PlayOneShot(clip);
		}
		else
		{
			AudioSource audioSource = audioSources[0];
			audioSource.volume = volume;
			audioSource.clip = clip;
			audioSource.Play();
		}
	}

	public void Play(string path, ESoundType type = ESoundType.EFFECT, float volume = 1f)
	{
		AudioClip audioClip = GetOrAddAudioClip(path, type);
		Play(audioClip, type, volume);
	}

	private AudioClip GetOrAddAudioClip(string path, ESoundType type = ESoundType.EFFECT)
	{
		if (!path.Contains("Sounds"))
		{
			path = "Sounds/" + path;
		}
		AudioClip audioClip = null;
		if (type == ESoundType.BGM)
		{
			Debug.Log("Trying to load: " + path);
			audioClip = Resources.Load<AudioClip>(path);
			Debug.Log((audioClip != null) ? "Loaded successfully!" : "Failed to load.");
		}
		else if (!audioClips.TryGetValue(path, out audioClip))
		{
			audioClip = Resources.Load<AudioClip>(path);
			audioClips.Add(path, audioClip);
		}
		if (audioClip == null)
		{
			Debug.Log("AudioClip Missing ! " + path);
		}
		return audioClip;
	}
}
