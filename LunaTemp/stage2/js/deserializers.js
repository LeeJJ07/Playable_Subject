var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2408 = root || request.c( 'UnityEngine.JointSpring' )
  var i2409 = data
  i2408.spring = i2409[0]
  i2408.damper = i2409[1]
  i2408.targetPosition = i2409[2]
  return i2408
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2410 = root || request.c( 'UnityEngine.JointMotor' )
  var i2411 = data
  i2410.m_TargetVelocity = i2411[0]
  i2410.m_Force = i2411[1]
  i2410.m_FreeSpin = i2411[2]
  return i2410
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2412 = root || request.c( 'UnityEngine.JointLimits' )
  var i2413 = data
  i2412.m_Min = i2413[0]
  i2412.m_Max = i2413[1]
  i2412.m_Bounciness = i2413[2]
  i2412.m_BounceMinVelocity = i2413[3]
  i2412.m_ContactDistance = i2413[4]
  i2412.minBounce = i2413[5]
  i2412.maxBounce = i2413[6]
  return i2412
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2414 = root || request.c( 'UnityEngine.JointDrive' )
  var i2415 = data
  i2414.m_PositionSpring = i2415[0]
  i2414.m_PositionDamper = i2415[1]
  i2414.m_MaximumForce = i2415[2]
  i2414.m_UseAcceleration = i2415[3]
  return i2414
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2416 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2417 = data
  i2416.m_Spring = i2417[0]
  i2416.m_Damper = i2417[1]
  return i2416
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2418 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2419 = data
  i2418.m_Limit = i2419[0]
  i2418.m_Bounciness = i2419[1]
  i2418.m_ContactDistance = i2419[2]
  return i2418
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2420 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2421 = data
  i2420.m_ExtremumSlip = i2421[0]
  i2420.m_ExtremumValue = i2421[1]
  i2420.m_AsymptoteSlip = i2421[2]
  i2420.m_AsymptoteValue = i2421[3]
  i2420.m_Stiffness = i2421[4]
  return i2420
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2422 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2423 = data
  i2422.m_LowerAngle = i2423[0]
  i2422.m_UpperAngle = i2423[1]
  return i2422
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2424 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2425 = data
  i2424.m_MotorSpeed = i2425[0]
  i2424.m_MaximumMotorTorque = i2425[1]
  return i2424
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2426 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2427 = data
  i2426.m_DampingRatio = i2427[0]
  i2426.m_Frequency = i2427[1]
  i2426.m_Angle = i2427[2]
  return i2426
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2428 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2429 = data
  i2428.m_LowerTranslation = i2429[0]
  i2428.m_UpperTranslation = i2429[1]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2431 = data
  i2430.position = new pc.Vec3( i2431[0], i2431[1], i2431[2] )
  i2430.scale = new pc.Vec3( i2431[3], i2431[4], i2431[5] )
  i2430.rotation = new pc.Quat(i2431[6], i2431[7], i2431[8], i2431[9])
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2433 = data
  request.r(i2433[0], i2433[1], 0, i2432, 'sharedMesh')
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'additionalVertexStreams')
  i2434.enabled = !!i2435[2]
  request.r(i2435[3], i2435[4], 0, i2434, 'sharedMaterial')
  var i2437 = i2435[5]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 2) {
  request.r(i2437[i + 0], i2437[i + 1], 2, i2436, '')
  }
  i2434.sharedMaterials = i2436
  i2434.receiveShadows = !!i2435[6]
  i2434.shadowCastingMode = i2435[7]
  i2434.sortingLayerID = i2435[8]
  i2434.sortingOrder = i2435[9]
  i2434.lightmapIndex = i2435[10]
  i2434.lightmapSceneIndex = i2435[11]
  i2434.lightmapScaleOffset = new pc.Vec4( i2435[12], i2435[13], i2435[14], i2435[15] )
  i2434.lightProbeUsage = i2435[16]
  i2434.reflectionProbeUsage = i2435[17]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2441 = data
  i2440.center = new pc.Vec3( i2441[0], i2441[1], i2441[2] )
  i2440.size = new pc.Vec3( i2441[3], i2441[4], i2441[5] )
  i2440.enabled = !!i2441[6]
  i2440.isTrigger = !!i2441[7]
  request.r(i2441[8], i2441[9], 0, i2440, 'material')
  return i2440
}

Deserializers["Box"] = function (request, data, root) {
  var i2442 = root || request.c( 'Box' )
  var i2443 = data
  request.r(i2443[0], i2443[1], 0, i2442, 'goodsPrefab')
  i2442.goodsID = i2443[2]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2445 = data
  i2444.name = i2445[0]
  i2444.tagId = i2445[1]
  i2444.enabled = !!i2445[2]
  i2444.isStatic = !!i2445[3]
  i2444.layer = i2445[4]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2447 = data
  i2446.name = i2447[0]
  i2446.halfPrecision = !!i2447[1]
  i2446.useUInt32IndexFormat = !!i2447[2]
  i2446.vertexCount = i2447[3]
  i2446.aabb = i2447[4]
  var i2449 = i2447[5]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( !!i2449[i + 0] );
  }
  i2446.streams = i2448
  i2446.vertices = i2447[6]
  var i2451 = i2447[7]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2451[i + 0]) );
  }
  i2446.subMeshes = i2450
  var i2453 = i2447[8]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 16) {
    i2452.push( new pc.Mat4().setData(i2453[i + 0], i2453[i + 1], i2453[i + 2], i2453[i + 3],  i2453[i + 4], i2453[i + 5], i2453[i + 6], i2453[i + 7],  i2453[i + 8], i2453[i + 9], i2453[i + 10], i2453[i + 11],  i2453[i + 12], i2453[i + 13], i2453[i + 14], i2453[i + 15]) );
  }
  i2446.bindposes = i2452
  var i2455 = i2447[9]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2455[i + 0]) );
  }
  i2446.blendShapes = i2454
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2461 = data
  i2460.triangles = i2461[0]
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2467 = data
  i2466.name = i2467[0]
  var i2469 = i2467[1]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2469[i + 0]) );
  }
  i2466.frames = i2468
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2470 = root || new pc.UnityMaterial()
  var i2471 = data
  i2470.name = i2471[0]
  request.r(i2471[1], i2471[2], 0, i2470, 'shader')
  i2470.renderQueue = i2471[3]
  i2470.enableInstancing = !!i2471[4]
  var i2473 = i2471[5]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2473[i + 0]) );
  }
  i2470.floatParameters = i2472
  var i2475 = i2471[6]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2475[i + 0]) );
  }
  i2470.colorParameters = i2474
  var i2477 = i2471[7]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2477[i + 0]) );
  }
  i2470.vectorParameters = i2476
  var i2479 = i2471[8]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2479[i + 0]) );
  }
  i2470.textureParameters = i2478
  var i2481 = i2471[9]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2481[i + 0]) );
  }
  i2470.materialFlags = i2480
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2485 = data
  i2484.name = i2485[0]
  i2484.value = i2485[1]
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2489 = data
  i2488.name = i2489[0]
  i2488.value = new pc.Color(i2489[1], i2489[2], i2489[3], i2489[4])
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2493 = data
  i2492.name = i2493[0]
  i2492.value = new pc.Vec4( i2493[1], i2493[2], i2493[3], i2493[4] )
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2497 = data
  i2496.name = i2497[0]
  request.r(i2497[1], i2497[2], 0, i2496, 'value')
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2501 = data
  i2500.name = i2501[0]
  i2500.enabled = !!i2501[1]
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2503 = data
  i2502.name = i2503[0]
  i2502.width = i2503[1]
  i2502.height = i2503[2]
  i2502.mipmapCount = i2503[3]
  i2502.anisoLevel = i2503[4]
  i2502.filterMode = i2503[5]
  i2502.hdr = !!i2503[6]
  i2502.format = i2503[7]
  i2502.wrapMode = i2503[8]
  i2502.alphaIsTransparency = !!i2503[9]
  i2502.alphaSource = i2503[10]
  i2502.graphicsFormat = i2503[11]
  i2502.sRGBTexture = !!i2503[12]
  i2502.desiredColorSpace = i2503[13]
  i2502.wrapU = i2503[14]
  i2502.wrapV = i2503[15]
  return i2502
}

Deserializers["DraggableObject"] = function (request, data, root) {
  var i2504 = root || request.c( 'DraggableObject' )
  var i2505 = data
  i2504.objectZPosition = i2505[0]
  return i2504
}

Deserializers["Goods"] = function (request, data, root) {
  var i2506 = root || request.c( 'Goods' )
  var i2507 = data
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2509 = data
  i2508.name = i2509[0]
  i2508.atlasId = i2509[1]
  i2508.mipmapCount = i2509[2]
  i2508.hdr = !!i2509[3]
  i2508.size = i2509[4]
  i2508.anisoLevel = i2509[5]
  i2508.filterMode = i2509[6]
  var i2511 = i2509[7]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 4) {
    i2510.push( UnityEngine.Rect.MinMaxRect(i2511[i + 0], i2511[i + 1], i2511[i + 2], i2511[i + 3]) );
  }
  i2508.rects = i2510
  i2508.wrapU = i2509[8]
  i2508.wrapV = i2509[9]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2515 = data
  i2514.name = i2515[0]
  i2514.index = i2515[1]
  i2514.startup = !!i2515[2]
  return i2514
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2516 = root || request.c( 'GameManager' )
  var i2517 = data
  i2516.floorCount = i2517[0]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2519 = data
  i2518.enabled = !!i2519[0]
  i2518.aspect = i2519[1]
  i2518.orthographic = !!i2519[2]
  i2518.orthographicSize = i2519[3]
  i2518.backgroundColor = new pc.Color(i2519[4], i2519[5], i2519[6], i2519[7])
  i2518.nearClipPlane = i2519[8]
  i2518.farClipPlane = i2519[9]
  i2518.fieldOfView = i2519[10]
  i2518.depth = i2519[11]
  i2518.clearFlags = i2519[12]
  i2518.cullingMask = i2519[13]
  i2518.rect = i2519[14]
  request.r(i2519[15], i2519[16], 0, i2518, 'targetTexture')
  i2518.usePhysicalProperties = !!i2519[17]
  i2518.focalLength = i2519[18]
  i2518.sensorSize = new pc.Vec2( i2519[19], i2519[20] )
  i2518.lensShift = new pc.Vec2( i2519[21], i2519[22] )
  i2518.gateFit = i2519[23]
  i2518.commandBufferCount = i2519[24]
  i2518.cameraType = i2519[25]
  return i2518
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i2520 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i2521 = data
  i2520.m_RenderShadows = !!i2521[0]
  i2520.m_RequiresDepthTextureOption = i2521[1]
  i2520.m_RequiresOpaqueTextureOption = i2521[2]
  i2520.m_CameraType = i2521[3]
  var i2523 = i2521[4]
  var i2522 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i2523.length; i += 2) {
  request.r(i2523[i + 0], i2523[i + 1], 1, i2522, '')
  }
  i2520.m_Cameras = i2522
  i2520.m_RendererIndex = i2521[5]
  i2520.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2521[6] )
  request.r(i2521[7], i2521[8], 0, i2520, 'm_VolumeTrigger')
  i2520.m_VolumeFrameworkUpdateModeOption = i2521[9]
  i2520.m_RenderPostProcessing = !!i2521[10]
  i2520.m_Antialiasing = i2521[11]
  i2520.m_AntialiasingQuality = i2521[12]
  i2520.m_StopNaN = !!i2521[13]
  i2520.m_Dithering = !!i2521[14]
  i2520.m_ClearDepth = !!i2521[15]
  i2520.m_AllowXRRendering = !!i2521[16]
  i2520.m_AllowHDROutput = !!i2521[17]
  i2520.m_UseScreenCoordOverride = !!i2521[18]
  i2520.m_ScreenSizeOverride = new pc.Vec4( i2521[19], i2521[20], i2521[21], i2521[22] )
  i2520.m_ScreenCoordScaleBias = new pc.Vec4( i2521[23], i2521[24], i2521[25], i2521[26] )
  i2520.m_RequiresDepthTexture = !!i2521[27]
  i2520.m_RequiresColorTexture = !!i2521[28]
  i2520.m_Version = i2521[29]
  i2520.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i2521[30], i2520.m_TaaSettings)
  return i2520
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i2526 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i2527 = data
  i2526.m_Quality = i2527[0]
  i2526.m_FrameInfluence = i2527[1]
  i2526.m_JitterScale = i2527[2]
  i2526.m_MipBias = i2527[3]
  i2526.m_VarianceClampScale = i2527[4]
  i2526.m_ContrastAdaptiveSharpening = i2527[5]
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2529 = data
  i2528.enabled = !!i2529[0]
  i2528.type = i2529[1]
  i2528.color = new pc.Color(i2529[2], i2529[3], i2529[4], i2529[5])
  i2528.cullingMask = i2529[6]
  i2528.intensity = i2529[7]
  i2528.range = i2529[8]
  i2528.spotAngle = i2529[9]
  i2528.shadows = i2529[10]
  i2528.shadowNormalBias = i2529[11]
  i2528.shadowBias = i2529[12]
  i2528.shadowStrength = i2529[13]
  i2528.shadowResolution = i2529[14]
  i2528.lightmapBakeType = i2529[15]
  i2528.renderMode = i2529[16]
  request.r(i2529[17], i2529[18], 0, i2528, 'cookie')
  i2528.cookieSize = i2529[19]
  return i2528
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i2530 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i2531 = data
  i2530.m_Version = i2531[0]
  i2530.m_UsePipelineSettings = !!i2531[1]
  i2530.m_AdditionalLightsShadowResolutionTier = i2531[2]
  i2530.m_LightLayerMask = i2531[3]
  i2530.m_RenderingLayers = i2531[4]
  i2530.m_CustomShadowLayers = !!i2531[5]
  i2530.m_ShadowLayerMask = i2531[6]
  i2530.m_ShadowRenderingLayers = i2531[7]
  i2530.m_LightCookieSize = new pc.Vec2( i2531[8], i2531[9] )
  i2530.m_LightCookieOffset = new pc.Vec2( i2531[10], i2531[11] )
  i2530.m_SoftShadowQuality = i2531[12]
  return i2530
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i2532 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i2533 = data
  i2532.priority = i2533[0]
  i2532.blendDistance = i2533[1]
  i2532.weight = i2533[2]
  request.r(i2533[3], i2533[4], 0, i2532, 'sharedProfile')
  i2532.m_IsGlobal = !!i2533[5]
  return i2532
}

Deserializers["BoxController"] = function (request, data, root) {
  var i2534 = root || request.c( 'BoxController' )
  var i2535 = data
  i2534.ease = i2535[0]
  i2534.dropDuration = i2535[1]
  i2534.startPosition = new pc.Vec3( i2535[2], i2535[3], i2535[4] )
  i2534.boxWidth = i2535[5]
  i2534.boxHeight = i2535[6]
  i2534.spacingX = i2535[7]
  request.r(i2535[8], i2535[9], 0, i2534, 'boxPrefab')
  var i2537 = i2535[10]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 2) {
  request.r(i2537[i + 0], i2537[i + 1], 2, i2536, '')
  }
  i2534.floorMaterials = i2536
  var i2539 = i2535[11]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 2) {
  request.r(i2539[i + 0], i2539[i + 1], 2, i2538, '')
  }
  i2534.goodsMaterials = i2538
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2541 = data
  i2540.pivot = new pc.Vec2( i2541[0], i2541[1] )
  i2540.anchorMin = new pc.Vec2( i2541[2], i2541[3] )
  i2540.anchorMax = new pc.Vec2( i2541[4], i2541[5] )
  i2540.sizeDelta = new pc.Vec2( i2541[6], i2541[7] )
  i2540.anchoredPosition3D = new pc.Vec3( i2541[8], i2541[9], i2541[10] )
  i2540.rotation = new pc.Quat(i2541[11], i2541[12], i2541[13], i2541[14])
  i2540.scale = new pc.Vec3( i2541[15], i2541[16], i2541[17] )
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2543 = data
  i2542.enabled = !!i2543[0]
  i2542.planeDistance = i2543[1]
  i2542.referencePixelsPerUnit = i2543[2]
  i2542.isFallbackOverlay = !!i2543[3]
  i2542.renderMode = i2543[4]
  i2542.renderOrder = i2543[5]
  i2542.sortingLayerName = i2543[6]
  i2542.sortingOrder = i2543[7]
  i2542.scaleFactor = i2543[8]
  request.r(i2543[9], i2543[10], 0, i2542, 'worldCamera')
  i2542.overrideSorting = !!i2543[11]
  i2542.pixelPerfect = !!i2543[12]
  i2542.targetDisplay = i2543[13]
  i2542.overridePixelPerfect = !!i2543[14]
  return i2542
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2544 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2545 = data
  i2544.m_UiScaleMode = i2545[0]
  i2544.m_ReferencePixelsPerUnit = i2545[1]
  i2544.m_ScaleFactor = i2545[2]
  i2544.m_ReferenceResolution = new pc.Vec2( i2545[3], i2545[4] )
  i2544.m_ScreenMatchMode = i2545[5]
  i2544.m_MatchWidthOrHeight = i2545[6]
  i2544.m_PhysicalUnit = i2545[7]
  i2544.m_FallbackScreenDPI = i2545[8]
  i2544.m_DefaultSpriteDPI = i2545[9]
  i2544.m_DynamicPixelsPerUnit = i2545[10]
  i2544.m_PresetInfoIsWorld = !!i2545[11]
  return i2544
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2546 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2547 = data
  i2546.m_IgnoreReversedGraphics = !!i2547[0]
  i2546.m_BlockingObjects = i2547[1]
  i2546.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2547[2] )
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2549 = data
  i2548.cullTransparentMesh = !!i2549[0]
  return i2548
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2550 = root || request.c( 'UnityEngine.UI.Image' )
  var i2551 = data
  request.r(i2551[0], i2551[1], 0, i2550, 'm_Sprite')
  i2550.m_Type = i2551[2]
  i2550.m_PreserveAspect = !!i2551[3]
  i2550.m_FillCenter = !!i2551[4]
  i2550.m_FillMethod = i2551[5]
  i2550.m_FillAmount = i2551[6]
  i2550.m_FillClockwise = !!i2551[7]
  i2550.m_FillOrigin = i2551[8]
  i2550.m_UseSpriteMesh = !!i2551[9]
  i2550.m_PixelsPerUnitMultiplier = i2551[10]
  request.r(i2551[11], i2551[12], 0, i2550, 'm_Material')
  i2550.m_Maskable = !!i2551[13]
  i2550.m_Color = new pc.Color(i2551[14], i2551[15], i2551[16], i2551[17])
  i2550.m_RaycastTarget = !!i2551[18]
  i2550.m_RaycastPadding = new pc.Vec4( i2551[19], i2551[20], i2551[21], i2551[22] )
  return i2550
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2552 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2553 = data
  request.r(i2553[0], i2553[1], 0, i2552, 'm_FirstSelected')
  i2552.m_sendNavigationEvents = !!i2553[2]
  i2552.m_DragThreshold = i2553[3]
  return i2552
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2554 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2555 = data
  i2554.m_HorizontalAxis = i2555[0]
  i2554.m_VerticalAxis = i2555[1]
  i2554.m_SubmitButton = i2555[2]
  i2554.m_CancelButton = i2555[3]
  i2554.m_InputActionsPerSecond = i2555[4]
  i2554.m_RepeatDelay = i2555[5]
  i2554.m_ForceModuleActive = !!i2555[6]
  i2554.m_SendPointerHoverToParent = !!i2555[7]
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2557 = data
  i2556.ambientIntensity = i2557[0]
  i2556.reflectionIntensity = i2557[1]
  i2556.ambientMode = i2557[2]
  i2556.ambientLight = new pc.Color(i2557[3], i2557[4], i2557[5], i2557[6])
  i2556.ambientSkyColor = new pc.Color(i2557[7], i2557[8], i2557[9], i2557[10])
  i2556.ambientGroundColor = new pc.Color(i2557[11], i2557[12], i2557[13], i2557[14])
  i2556.ambientEquatorColor = new pc.Color(i2557[15], i2557[16], i2557[17], i2557[18])
  i2556.fogColor = new pc.Color(i2557[19], i2557[20], i2557[21], i2557[22])
  i2556.fogEndDistance = i2557[23]
  i2556.fogStartDistance = i2557[24]
  i2556.fogDensity = i2557[25]
  i2556.fog = !!i2557[26]
  request.r(i2557[27], i2557[28], 0, i2556, 'skybox')
  i2556.fogMode = i2557[29]
  var i2559 = i2557[30]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2559[i + 0]) );
  }
  i2556.lightmaps = i2558
  i2556.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2557[31], i2556.lightProbes)
  i2556.lightmapsMode = i2557[32]
  i2556.mixedBakeMode = i2557[33]
  i2556.environmentLightingMode = i2557[34]
  i2556.ambientProbe = new pc.SphericalHarmonicsL2(i2557[35])
  i2556.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2557[36])
  i2556.useReferenceAmbientProbe = !!i2557[37]
  request.r(i2557[38], i2557[39], 0, i2556, 'customReflection')
  request.r(i2557[40], i2557[41], 0, i2556, 'defaultReflection')
  i2556.defaultReflectionMode = i2557[42]
  i2556.defaultReflectionResolution = i2557[43]
  i2556.sunLightObjectId = i2557[44]
  i2556.pixelLightCount = i2557[45]
  i2556.defaultReflectionHDR = !!i2557[46]
  i2556.hasLightDataAsset = !!i2557[47]
  i2556.hasManualGenerate = !!i2557[48]
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2563 = data
  request.r(i2563[0], i2563[1], 0, i2562, 'lightmapColor')
  request.r(i2563[2], i2563[3], 0, i2562, 'lightmapDirection')
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2564 = root || new UnityEngine.LightProbes()
  var i2565 = data
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i2573 = data
  i2572.AdditionalLightsPerObjectLimit = i2573[0]
  i2572.AdditionalLightsRenderingMode = i2573[1]
  i2572.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2573[2], i2572.LightRenderingMode)
  i2572.ColorGradingLutSize = i2573[3]
  i2572.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i2573[4], i2572.ColorGradingMode)
  i2572.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2573[5], i2572.MainLightRenderingMode)
  i2572.MainLightRenderingModeValue = i2573[6]
  i2572.SupportsMainLightShadows = !!i2573[7]
  i2572.MixedLightingSupported = !!i2573[8]
  i2572.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i2573[9], i2572.MsaaQuality)
  i2572.MSAA = i2573[10]
  i2572.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i2573[11], i2572.OpaqueDownsampling)
  i2572.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i2573[12], i2572.MainLightShadowmapResolution)
  i2572.MainLightShadowmapResolutionValue = i2573[13]
  i2572.SupportsSoftShadows = !!i2573[14]
  i2572.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i2573[15], i2572.SoftShadowQuality)
  i2572.SoftShadowQualityValue = i2573[16]
  i2572.ShadowDistance = i2573[17]
  i2572.ShadowCascadeCount = i2573[18]
  i2572.Cascade2Split = i2573[19]
  i2572.Cascade3Split = new pc.Vec2( i2573[20], i2573[21] )
  i2572.Cascade4Split = new pc.Vec3( i2573[22], i2573[23], i2573[24] )
  i2572.CascadeBorder = i2573[25]
  i2572.ShadowDepthBias = i2573[26]
  i2572.ShadowNormalBias = i2573[27]
  i2572.RenderScale = i2573[28]
  i2572.RequireDepthTexture = !!i2573[29]
  i2572.RequireOpaqueTexture = !!i2573[30]
  i2572.SupportsHDR = !!i2573[31]
  i2572.SupportsTerrainHoles = !!i2573[32]
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i2575 = data
  i2574.Disabled = i2575[0]
  i2574.PerVertex = i2575[1]
  i2574.PerPixel = i2575[2]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i2577 = data
  i2576.LowDynamicRange = i2577[0]
  i2576.HighDynamicRange = i2577[1]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i2579 = data
  i2578.Disabled = i2579[0]
  i2578._2x = i2579[1]
  i2578._4x = i2579[2]
  i2578._8x = i2579[3]
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i2581 = data
  i2580.None = i2581[0]
  i2580._2xBilinear = i2581[1]
  i2580._4xBox = i2581[2]
  i2580._4xBilinear = i2581[3]
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i2583 = data
  i2582._256 = i2583[0]
  i2582._512 = i2583[1]
  i2582._1024 = i2583[2]
  i2582._2048 = i2583[3]
  i2582._4096 = i2583[4]
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i2585 = data
  i2584.UsePipelineSettings = i2585[0]
  i2584.Low = i2585[1]
  i2584.Medium = i2585[2]
  i2584.High = i2585[3]
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2587 = data
  var i2589 = i2587[0]
  var i2588 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2589[i + 0]));
  }
  i2586.ShaderCompilationErrors = i2588
  i2586.name = i2587[1]
  i2586.guid = i2587[2]
  var i2591 = i2587[3]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.push( i2591[i + 0] );
  }
  i2586.shaderDefinedKeywords = i2590
  var i2593 = i2587[4]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2593[i + 0]) );
  }
  i2586.passes = i2592
  var i2595 = i2587[5]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2595[i + 0]) );
  }
  i2586.usePasses = i2594
  var i2597 = i2587[6]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2597[i + 0]) );
  }
  i2586.defaultParameterValues = i2596
  request.r(i2587[7], i2587[8], 0, i2586, 'unityFallbackShader')
  i2586.readDepth = !!i2587[9]
  i2586.isCreatedByShaderGraph = !!i2587[10]
  i2586.compiled = !!i2587[11]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2601 = data
  i2600.shaderName = i2601[0]
  i2600.errorMessage = i2601[1]
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2606 = root || new pc.UnityShaderPass()
  var i2607 = data
  i2606.id = i2607[0]
  i2606.subShaderIndex = i2607[1]
  i2606.name = i2607[2]
  i2606.passType = i2607[3]
  i2606.grabPassTextureName = i2607[4]
  i2606.usePass = !!i2607[5]
  i2606.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2607[6], i2606.zTest)
  i2606.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2607[7], i2606.zWrite)
  i2606.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2607[8], i2606.culling)
  i2606.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2607[9], i2606.blending)
  i2606.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2607[10], i2606.alphaBlending)
  i2606.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2607[11], i2606.colorWriteMask)
  i2606.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2607[12], i2606.offsetUnits)
  i2606.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2607[13], i2606.offsetFactor)
  i2606.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2607[14], i2606.stencilRef)
  i2606.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2607[15], i2606.stencilReadMask)
  i2606.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2607[16], i2606.stencilWriteMask)
  i2606.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2607[17], i2606.stencilOp)
  i2606.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2607[18], i2606.stencilOpFront)
  i2606.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2607[19], i2606.stencilOpBack)
  var i2609 = i2607[20]
  var i2608 = []
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2609[i + 0]) );
  }
  i2606.tags = i2608
  var i2611 = i2607[21]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( i2611[i + 0] );
  }
  i2606.passDefinedKeywords = i2610
  var i2613 = i2607[22]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2613[i + 0]) );
  }
  i2606.passDefinedKeywordGroups = i2612
  var i2615 = i2607[23]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2615[i + 0]) );
  }
  i2606.variants = i2614
  var i2617 = i2607[24]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2617[i + 0]) );
  }
  i2606.excludedVariants = i2616
  i2606.hasDepthReader = !!i2607[25]
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2619 = data
  i2618.val = i2619[0]
  i2618.name = i2619[1]
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2621 = data
  i2620.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2621[0], i2620.src)
  i2620.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2621[1], i2620.dst)
  i2620.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2621[2], i2620.op)
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2623 = data
  i2622.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2623[0], i2622.pass)
  i2622.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2623[1], i2622.fail)
  i2622.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2623[2], i2622.zFail)
  i2622.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2623[3], i2622.comp)
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2627 = data
  i2626.name = i2627[0]
  i2626.value = i2627[1]
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2631 = data
  var i2633 = i2631[0]
  var i2632 = []
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.push( i2633[i + 0] );
  }
  i2630.keywords = i2632
  i2630.hasDiscard = !!i2631[1]
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2637 = data
  i2636.passId = i2637[0]
  i2636.subShaderIndex = i2637[1]
  var i2639 = i2637[2]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.push( i2639[i + 0] );
  }
  i2636.keywords = i2638
  i2636.vertexProgram = i2637[3]
  i2636.fragmentProgram = i2637[4]
  i2636.exportedForWebGl2 = !!i2637[5]
  i2636.readDepth = !!i2637[6]
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2643 = data
  request.r(i2643[0], i2643[1], 0, i2642, 'shader')
  i2642.pass = i2643[2]
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2647 = data
  i2646.name = i2647[0]
  i2646.type = i2647[1]
  i2646.value = new pc.Vec4( i2647[2], i2647[3], i2647[4], i2647[5] )
  i2646.textureValue = i2647[6]
  i2646.shaderPropertyFlag = i2647[7]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2649 = data
  i2648.name = i2649[0]
  request.r(i2649[1], i2649[2], 0, i2648, 'texture')
  i2648.aabb = i2649[3]
  i2648.vertices = i2649[4]
  i2648.triangles = i2649[5]
  i2648.textureRect = UnityEngine.Rect.MinMaxRect(i2649[6], i2649[7], i2649[8], i2649[9])
  i2648.packedRect = UnityEngine.Rect.MinMaxRect(i2649[10], i2649[11], i2649[12], i2649[13])
  i2648.border = new pc.Vec4( i2649[14], i2649[15], i2649[16], i2649[17] )
  i2648.transparency = i2649[18]
  i2648.bounds = i2649[19]
  i2648.pixelsPerUnit = i2649[20]
  i2648.textureWidth = i2649[21]
  i2648.textureHeight = i2649[22]
  i2648.nativeSize = new pc.Vec2( i2649[23], i2649[24] )
  i2648.pivot = new pc.Vec2( i2649[25], i2649[26] )
  i2648.textureRectOffset = new pc.Vec2( i2649[27], i2649[28] )
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2651 = data
  i2650.name = i2651[0]
  return i2650
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i2652 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i2653 = data
  var i2655 = i2653[0]
  var i2654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i2655.length; i += 2) {
  request.r(i2655[i + 0], i2655[i + 1], 1, i2654, '')
  }
  i2652.components = i2654
  return i2652
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i2658 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i2659 = data
  i2658.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i2659[0], i2658.mode)
  i2658.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i2659[1], i2658.neutralHDRRangeReductionMode)
  i2658.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i2659[2], i2658.acesPreset)
  i2658.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2659[3], i2658.hueShiftAmount)
  i2658.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i2659[4], i2658.detectPaperWhite)
  i2658.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2659[5], i2658.paperWhite)
  i2658.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i2659[6], i2658.detectBrightnessLimits)
  i2658.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2659[7], i2658.minNits)
  i2658.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2659[8], i2658.maxNits)
  i2658.active = !!i2659[9]
  return i2658
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i2660 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i2661 = data
  i2660.m_Value = i2661[0]
  i2660.m_OverrideState = !!i2661[1]
  return i2660
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i2662 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i2663 = data
  i2662.m_Value = i2663[0]
  i2662.m_OverrideState = !!i2663[1]
  return i2662
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i2664 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i2665 = data
  i2664.m_Value = i2665[0]
  i2664.m_OverrideState = !!i2665[1]
  return i2664
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i2666 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i2667 = data
  i2666.m_Value = i2667[0]
  i2666.m_OverrideState = !!i2667[1]
  return i2666
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i2668 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i2669 = data
  i2668.m_Value = !!i2669[0]
  i2668.m_OverrideState = !!i2669[1]
  return i2668
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i2670 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i2671 = data
  i2670.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2671[0], i2670.skipIterations)
  i2670.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i2671[1], i2670.threshold)
  i2670.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2671[2], i2670.intensity)
  i2670.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2671[3], i2670.scatter)
  i2670.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i2671[4], i2670.clamp)
  i2670.tint = request.d('UnityEngine.Rendering.ColorParameter', i2671[5], i2670.tint)
  i2670.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i2671[6], i2670.highQualityFiltering)
  i2670.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i2671[7], i2670.downscale)
  i2670.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2671[8], i2670.maxIterations)
  i2670.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i2671[9], i2670.dirtTexture)
  i2670.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2671[10], i2670.dirtIntensity)
  i2670.active = !!i2671[11]
  return i2670
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i2672 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i2673 = data
  i2672.m_Value = i2673[0]
  i2672.m_OverrideState = !!i2673[1]
  return i2672
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i2674 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i2675 = data
  i2674.m_Value = i2675[0]
  i2674.m_OverrideState = !!i2675[1]
  return i2674
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i2676 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i2677 = data
  i2676.m_Value = new pc.Color(i2677[0], i2677[1], i2677[2], i2677[3])
  i2676.m_OverrideState = !!i2677[4]
  return i2676
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i2678 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i2679 = data
  i2678.m_Value = i2679[0]
  i2678.m_OverrideState = !!i2679[1]
  return i2678
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i2680 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i2681 = data
  i2680.dimension = i2681[0]
  request.r(i2681[1], i2681[2], 0, i2680, 'm_Value')
  i2680.m_OverrideState = !!i2681[3]
  return i2680
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i2682 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i2683 = data
  i2682.color = request.d('UnityEngine.Rendering.ColorParameter', i2683[0], i2682.color)
  i2682.center = request.d('UnityEngine.Rendering.Vector2Parameter', i2683[1], i2682.center)
  i2682.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2683[2], i2682.intensity)
  i2682.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2683[3], i2682.smoothness)
  i2682.rounded = request.d('UnityEngine.Rendering.BoolParameter', i2683[4], i2682.rounded)
  i2682.active = !!i2683[5]
  return i2682
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i2684 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i2685 = data
  i2684.m_Value = new pc.Vec2( i2685[0], i2685[1] )
  i2684.m_OverrideState = !!i2685[2]
  return i2684
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2686 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2687 = data
  i2686.useSafeMode = !!i2687[0]
  i2686.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2687[1], i2686.safeModeOptions)
  i2686.timeScale = i2687[2]
  i2686.unscaledTimeScale = i2687[3]
  i2686.useSmoothDeltaTime = !!i2687[4]
  i2686.maxSmoothUnscaledTime = i2687[5]
  i2686.rewindCallbackMode = i2687[6]
  i2686.showUnityEditorReport = !!i2687[7]
  i2686.logBehaviour = i2687[8]
  i2686.drawGizmos = !!i2687[9]
  i2686.defaultRecyclable = !!i2687[10]
  i2686.defaultAutoPlay = i2687[11]
  i2686.defaultUpdateType = i2687[12]
  i2686.defaultTimeScaleIndependent = !!i2687[13]
  i2686.defaultEaseType = i2687[14]
  i2686.defaultEaseOvershootOrAmplitude = i2687[15]
  i2686.defaultEasePeriod = i2687[16]
  i2686.defaultAutoKill = !!i2687[17]
  i2686.defaultLoopType = i2687[18]
  i2686.debugMode = !!i2687[19]
  i2686.debugStoreTargetId = !!i2687[20]
  i2686.showPreviewPanel = !!i2687[21]
  i2686.storeSettingsLocation = i2687[22]
  i2686.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2687[23], i2686.modules)
  i2686.createASMDEF = !!i2687[24]
  i2686.showPlayingTweens = !!i2687[25]
  i2686.showPausedTweens = !!i2687[26]
  return i2686
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2688 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2689 = data
  i2688.logBehaviour = i2689[0]
  i2688.nestedTweenFailureBehaviour = i2689[1]
  return i2688
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2690 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2691 = data
  i2690.showPanel = !!i2691[0]
  i2690.audioEnabled = !!i2691[1]
  i2690.physicsEnabled = !!i2691[2]
  i2690.physics2DEnabled = !!i2691[3]
  i2690.spriteEnabled = !!i2691[4]
  i2690.uiEnabled = !!i2691[5]
  i2690.textMeshProEnabled = !!i2691[6]
  i2690.tk2DEnabled = !!i2691[7]
  i2690.deAudioEnabled = !!i2691[8]
  i2690.deUnityExtendedEnabled = !!i2691[9]
  i2690.epoOutlineEnabled = !!i2691[10]
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2693 = data
  var i2695 = i2693[0]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2695[i + 0]) );
  }
  i2692.files = i2694
  i2692.componentToPrefabIds = i2693[1]
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2699 = data
  i2698.path = i2699[0]
  request.r(i2699[1], i2699[2], 0, i2698, 'unityObject')
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2701 = data
  var i2703 = i2701[0]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2703[i + 0]) );
  }
  i2700.scriptsExecutionOrder = i2702
  var i2705 = i2701[1]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2705[i + 0]) );
  }
  i2700.sortingLayers = i2704
  var i2707 = i2701[2]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2707[i + 0]) );
  }
  i2700.cullingLayers = i2706
  i2700.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2701[3], i2700.timeSettings)
  i2700.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2701[4], i2700.physicsSettings)
  i2700.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2701[5], i2700.physics2DSettings)
  i2700.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2701[6], i2700.qualitySettings)
  i2700.enableRealtimeShadows = !!i2701[7]
  i2700.enableAutoInstancing = !!i2701[8]
  i2700.enableDynamicBatching = !!i2701[9]
  i2700.lightmapEncodingQuality = i2701[10]
  i2700.desiredColorSpace = i2701[11]
  var i2709 = i2701[12]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( i2709[i + 0] );
  }
  i2700.allTags = i2708
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2713 = data
  i2712.name = i2713[0]
  i2712.value = i2713[1]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2717 = data
  i2716.id = i2717[0]
  i2716.name = i2717[1]
  i2716.value = i2717[2]
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2721 = data
  i2720.id = i2721[0]
  i2720.name = i2721[1]
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2723 = data
  i2722.fixedDeltaTime = i2723[0]
  i2722.maximumDeltaTime = i2723[1]
  i2722.timeScale = i2723[2]
  i2722.maximumParticleTimestep = i2723[3]
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2725 = data
  i2724.gravity = new pc.Vec3( i2725[0], i2725[1], i2725[2] )
  i2724.defaultSolverIterations = i2725[3]
  i2724.bounceThreshold = i2725[4]
  i2724.autoSyncTransforms = !!i2725[5]
  i2724.autoSimulation = !!i2725[6]
  var i2727 = i2725[7]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2727[i + 0]) );
  }
  i2724.collisionMatrix = i2726
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2731 = data
  i2730.enabled = !!i2731[0]
  i2730.layerId = i2731[1]
  i2730.otherLayerId = i2731[2]
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2733 = data
  request.r(i2733[0], i2733[1], 0, i2732, 'material')
  i2732.gravity = new pc.Vec2( i2733[2], i2733[3] )
  i2732.positionIterations = i2733[4]
  i2732.velocityIterations = i2733[5]
  i2732.velocityThreshold = i2733[6]
  i2732.maxLinearCorrection = i2733[7]
  i2732.maxAngularCorrection = i2733[8]
  i2732.maxTranslationSpeed = i2733[9]
  i2732.maxRotationSpeed = i2733[10]
  i2732.baumgarteScale = i2733[11]
  i2732.baumgarteTOIScale = i2733[12]
  i2732.timeToSleep = i2733[13]
  i2732.linearSleepTolerance = i2733[14]
  i2732.angularSleepTolerance = i2733[15]
  i2732.defaultContactOffset = i2733[16]
  i2732.autoSimulation = !!i2733[17]
  i2732.queriesHitTriggers = !!i2733[18]
  i2732.queriesStartInColliders = !!i2733[19]
  i2732.callbacksOnDisable = !!i2733[20]
  i2732.reuseCollisionCallbacks = !!i2733[21]
  i2732.autoSyncTransforms = !!i2733[22]
  var i2735 = i2733[23]
  var i2734 = []
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2735[i + 0]) );
  }
  i2732.collisionMatrix = i2734
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2739 = data
  i2738.enabled = !!i2739[0]
  i2738.layerId = i2739[1]
  i2738.otherLayerId = i2739[2]
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2741 = data
  var i2743 = i2741[0]
  var i2742 = []
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2743[i + 0]) );
  }
  i2740.qualityLevels = i2742
  var i2745 = i2741[1]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 1) {
    i2744.push( i2745[i + 0] );
  }
  i2740.names = i2744
  i2740.shadows = i2741[2]
  i2740.anisotropicFiltering = i2741[3]
  i2740.antiAliasing = i2741[4]
  i2740.lodBias = i2741[5]
  i2740.shadowCascades = i2741[6]
  i2740.shadowDistance = i2741[7]
  i2740.shadowmaskMode = i2741[8]
  i2740.shadowProjection = i2741[9]
  i2740.shadowResolution = i2741[10]
  i2740.softParticles = !!i2741[11]
  i2740.softVegetation = !!i2741[12]
  i2740.activeColorSpace = i2741[13]
  i2740.desiredColorSpace = i2741[14]
  i2740.masterTextureLimit = i2741[15]
  i2740.maxQueuedFrames = i2741[16]
  i2740.particleRaycastBudget = i2741[17]
  i2740.pixelLightCount = i2741[18]
  i2740.realtimeReflectionProbes = !!i2741[19]
  i2740.shadowCascade2Split = i2741[20]
  i2740.shadowCascade4Split = new pc.Vec3( i2741[21], i2741[22], i2741[23] )
  i2740.streamingMipmapsActive = !!i2741[24]
  i2740.vSyncCount = i2741[25]
  i2740.asyncUploadBufferSize = i2741[26]
  i2740.asyncUploadTimeSlice = i2741[27]
  i2740.billboardsFaceCameraPosition = !!i2741[28]
  i2740.shadowNearPlaneOffset = i2741[29]
  i2740.streamingMipmapsMemoryBudget = i2741[30]
  i2740.maximumLODLevel = i2741[31]
  i2740.streamingMipmapsAddAllCameras = !!i2741[32]
  i2740.streamingMipmapsMaxLevelReduction = i2741[33]
  i2740.streamingMipmapsRenderersPerFrame = i2741[34]
  i2740.resolutionScalingFixedDPIFactor = i2741[35]
  i2740.streamingMipmapsMaxFileIORequests = i2741[36]
  i2740.currentQualityLevel = i2741[37]
  return i2740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2751 = data
  i2750.weight = i2751[0]
  i2750.vertices = i2751[1]
  i2750.normals = i2751[2]
  i2750.tangents = i2751[3]
  return i2750
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[14],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[14],"71":[3],"72":[73],"74":[73],"23":[22],"75":[27,76,22],"77":[22],"78":[14],"16":[14],"18":[17],"79":[80],"81":[22],"82":[22],"26":[23],"28":[27,22],"83":[22],"25":[23],"84":[22],"85":[22],"86":[22],"87":[22],"88":[22],"89":[22],"90":[22],"91":[22],"92":[22],"93":[27,22],"94":[22],"95":[22],"96":[22],"97":[22],"98":[27,22],"99":[22],"100":[30],"101":[30],"31":[30],"102":[30],"103":[14],"104":[14],"105":[80],"106":[22],"107":[3,22],"108":[22,27],"109":[22],"110":[27,22],"111":[3],"112":[27,22],"113":[22],"114":[80]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","Box","UnityEngine.GameObject","UnityEngine.Shader","UnityEngine.Texture2D","DraggableObject","Goods","GameManager","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","BoxController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioClip","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.ParticleSystem","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/07/2025 09:40:47";

Deserializers.lunaDaysRunning = "1.4";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "jkj9513-naver-com";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "1ea3bb43f778449c78ecaf64beaf075a";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 2.0.0\ncom.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1744";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4534";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "3c2c2f2f-8063-43e7-bd26-420c79224be1";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

