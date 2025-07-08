var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4472 = root || request.c( 'UnityEngine.JointSpring' )
  var i4473 = data
  i4472.spring = i4473[0]
  i4472.damper = i4473[1]
  i4472.targetPosition = i4473[2]
  return i4472
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4474 = root || request.c( 'UnityEngine.JointMotor' )
  var i4475 = data
  i4474.m_TargetVelocity = i4475[0]
  i4474.m_Force = i4475[1]
  i4474.m_FreeSpin = i4475[2]
  return i4474
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4476 = root || request.c( 'UnityEngine.JointLimits' )
  var i4477 = data
  i4476.m_Min = i4477[0]
  i4476.m_Max = i4477[1]
  i4476.m_Bounciness = i4477[2]
  i4476.m_BounceMinVelocity = i4477[3]
  i4476.m_ContactDistance = i4477[4]
  i4476.minBounce = i4477[5]
  i4476.maxBounce = i4477[6]
  return i4476
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4478 = root || request.c( 'UnityEngine.JointDrive' )
  var i4479 = data
  i4478.m_PositionSpring = i4479[0]
  i4478.m_PositionDamper = i4479[1]
  i4478.m_MaximumForce = i4479[2]
  i4478.m_UseAcceleration = i4479[3]
  return i4478
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4480 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4481 = data
  i4480.m_Spring = i4481[0]
  i4480.m_Damper = i4481[1]
  return i4480
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4482 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4483 = data
  i4482.m_Limit = i4483[0]
  i4482.m_Bounciness = i4483[1]
  i4482.m_ContactDistance = i4483[2]
  return i4482
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4484 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4485 = data
  i4484.m_ExtremumSlip = i4485[0]
  i4484.m_ExtremumValue = i4485[1]
  i4484.m_AsymptoteSlip = i4485[2]
  i4484.m_AsymptoteValue = i4485[3]
  i4484.m_Stiffness = i4485[4]
  return i4484
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4486 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4487 = data
  i4486.m_LowerAngle = i4487[0]
  i4486.m_UpperAngle = i4487[1]
  return i4486
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4488 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4489 = data
  i4488.m_MotorSpeed = i4489[0]
  i4488.m_MaximumMotorTorque = i4489[1]
  return i4488
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4490 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4491 = data
  i4490.m_DampingRatio = i4491[0]
  i4490.m_Frequency = i4491[1]
  i4490.m_Angle = i4491[2]
  return i4490
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4492 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4493 = data
  i4492.m_LowerTranslation = i4493[0]
  i4492.m_UpperTranslation = i4493[1]
  return i4492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4495 = data
  i4494.position = new pc.Vec3( i4495[0], i4495[1], i4495[2] )
  i4494.scale = new pc.Vec3( i4495[3], i4495[4], i4495[5] )
  i4494.rotation = new pc.Quat(i4495[6], i4495[7], i4495[8], i4495[9])
  return i4494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4497 = data
  request.r(i4497[0], i4497[1], 0, i4496, 'sharedMesh')
  return i4496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4499 = data
  request.r(i4499[0], i4499[1], 0, i4498, 'additionalVertexStreams')
  i4498.enabled = !!i4499[2]
  request.r(i4499[3], i4499[4], 0, i4498, 'sharedMaterial')
  var i4501 = i4499[5]
  var i4500 = []
  for(var i = 0; i < i4501.length; i += 2) {
  request.r(i4501[i + 0], i4501[i + 1], 2, i4500, '')
  }
  i4498.sharedMaterials = i4500
  i4498.receiveShadows = !!i4499[6]
  i4498.shadowCastingMode = i4499[7]
  i4498.sortingLayerID = i4499[8]
  i4498.sortingOrder = i4499[9]
  i4498.lightmapIndex = i4499[10]
  i4498.lightmapSceneIndex = i4499[11]
  i4498.lightmapScaleOffset = new pc.Vec4( i4499[12], i4499[13], i4499[14], i4499[15] )
  i4498.lightProbeUsage = i4499[16]
  i4498.reflectionProbeUsage = i4499[17]
  return i4498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i4504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i4505 = data
  i4504.center = new pc.Vec3( i4505[0], i4505[1], i4505[2] )
  i4504.size = new pc.Vec3( i4505[3], i4505[4], i4505[5] )
  i4504.enabled = !!i4505[6]
  i4504.isTrigger = !!i4505[7]
  request.r(i4505[8], i4505[9], 0, i4504, 'material')
  return i4504
}

Deserializers["Box"] = function (request, data, root) {
  var i4506 = root || request.c( 'Box' )
  var i4507 = data
  request.r(i4507[0], i4507[1], 0, i4506, 'goodsPrefab')
  i4506.goodsID = i4507[2]
  return i4506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4509 = data
  i4508.name = i4509[0]
  i4508.tagId = i4509[1]
  i4508.enabled = !!i4509[2]
  i4508.isStatic = !!i4509[3]
  i4508.layer = i4509[4]
  return i4508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4511 = data
  i4510.name = i4511[0]
  i4510.halfPrecision = !!i4511[1]
  i4510.useUInt32IndexFormat = !!i4511[2]
  i4510.vertexCount = i4511[3]
  i4510.aabb = i4511[4]
  var i4513 = i4511[5]
  var i4512 = []
  for(var i = 0; i < i4513.length; i += 1) {
    i4512.push( !!i4513[i + 0] );
  }
  i4510.streams = i4512
  i4510.vertices = i4511[6]
  var i4515 = i4511[7]
  var i4514 = []
  for(var i = 0; i < i4515.length; i += 1) {
    i4514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4515[i + 0]) );
  }
  i4510.subMeshes = i4514
  var i4517 = i4511[8]
  var i4516 = []
  for(var i = 0; i < i4517.length; i += 16) {
    i4516.push( new pc.Mat4().setData(i4517[i + 0], i4517[i + 1], i4517[i + 2], i4517[i + 3],  i4517[i + 4], i4517[i + 5], i4517[i + 6], i4517[i + 7],  i4517[i + 8], i4517[i + 9], i4517[i + 10], i4517[i + 11],  i4517[i + 12], i4517[i + 13], i4517[i + 14], i4517[i + 15]) );
  }
  i4510.bindposes = i4516
  var i4519 = i4511[9]
  var i4518 = []
  for(var i = 0; i < i4519.length; i += 1) {
    i4518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4519[i + 0]) );
  }
  i4510.blendShapes = i4518
  return i4510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4525 = data
  i4524.triangles = i4525[0]
  return i4524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4531 = data
  i4530.name = i4531[0]
  var i4533 = i4531[1]
  var i4532 = []
  for(var i = 0; i < i4533.length; i += 1) {
    i4532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4533[i + 0]) );
  }
  i4530.frames = i4532
  return i4530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4534 = root || new pc.UnityMaterial()
  var i4535 = data
  i4534.name = i4535[0]
  request.r(i4535[1], i4535[2], 0, i4534, 'shader')
  i4534.renderQueue = i4535[3]
  i4534.enableInstancing = !!i4535[4]
  var i4537 = i4535[5]
  var i4536 = []
  for(var i = 0; i < i4537.length; i += 1) {
    i4536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4537[i + 0]) );
  }
  i4534.floatParameters = i4536
  var i4539 = i4535[6]
  var i4538 = []
  for(var i = 0; i < i4539.length; i += 1) {
    i4538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4539[i + 0]) );
  }
  i4534.colorParameters = i4538
  var i4541 = i4535[7]
  var i4540 = []
  for(var i = 0; i < i4541.length; i += 1) {
    i4540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4541[i + 0]) );
  }
  i4534.vectorParameters = i4540
  var i4543 = i4535[8]
  var i4542 = []
  for(var i = 0; i < i4543.length; i += 1) {
    i4542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4543[i + 0]) );
  }
  i4534.textureParameters = i4542
  var i4545 = i4535[9]
  var i4544 = []
  for(var i = 0; i < i4545.length; i += 1) {
    i4544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4545[i + 0]) );
  }
  i4534.materialFlags = i4544
  return i4534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4549 = data
  i4548.name = i4549[0]
  i4548.value = i4549[1]
  return i4548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4553 = data
  i4552.name = i4553[0]
  i4552.value = new pc.Color(i4553[1], i4553[2], i4553[3], i4553[4])
  return i4552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4557 = data
  i4556.name = i4557[0]
  i4556.value = new pc.Vec4( i4557[1], i4557[2], i4557[3], i4557[4] )
  return i4556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4561 = data
  i4560.name = i4561[0]
  request.r(i4561[1], i4561[2], 0, i4560, 'value')
  return i4560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4565 = data
  i4564.name = i4565[0]
  i4564.enabled = !!i4565[1]
  return i4564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4567 = data
  i4566.name = i4567[0]
  i4566.width = i4567[1]
  i4566.height = i4567[2]
  i4566.mipmapCount = i4567[3]
  i4566.anisoLevel = i4567[4]
  i4566.filterMode = i4567[5]
  i4566.hdr = !!i4567[6]
  i4566.format = i4567[7]
  i4566.wrapMode = i4567[8]
  i4566.alphaIsTransparency = !!i4567[9]
  i4566.alphaSource = i4567[10]
  i4566.graphicsFormat = i4567[11]
  i4566.sRGBTexture = !!i4567[12]
  i4566.desiredColorSpace = i4567[13]
  i4566.wrapU = i4567[14]
  i4566.wrapV = i4567[15]
  return i4566
}

Deserializers["DraggableObject"] = function (request, data, root) {
  var i4568 = root || request.c( 'DraggableObject' )
  var i4569 = data
  i4568.objectZPosition = i4569[0]
  return i4568
}

Deserializers["Goods"] = function (request, data, root) {
  var i4570 = root || request.c( 'Goods' )
  var i4571 = data
  return i4570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i4572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i4573 = data
  i4572.name = i4573[0]
  i4572.atlasId = i4573[1]
  i4572.mipmapCount = i4573[2]
  i4572.hdr = !!i4573[3]
  i4572.size = i4573[4]
  i4572.anisoLevel = i4573[5]
  i4572.filterMode = i4573[6]
  var i4575 = i4573[7]
  var i4574 = []
  for(var i = 0; i < i4575.length; i += 4) {
    i4574.push( UnityEngine.Rect.MinMaxRect(i4575[i + 0], i4575[i + 1], i4575[i + 2], i4575[i + 3]) );
  }
  i4572.rects = i4574
  i4572.wrapU = i4573[8]
  i4572.wrapV = i4573[9]
  return i4572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4579 = data
  i4578.name = i4579[0]
  i4578.index = i4579[1]
  i4578.startup = !!i4579[2]
  return i4578
}

Deserializers["GameManager"] = function (request, data, root) {
  var i4580 = root || request.c( 'GameManager' )
  var i4581 = data
  return i4580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4583 = data
  i4582.enabled = !!i4583[0]
  i4582.aspect = i4583[1]
  i4582.orthographic = !!i4583[2]
  i4582.orthographicSize = i4583[3]
  i4582.backgroundColor = new pc.Color(i4583[4], i4583[5], i4583[6], i4583[7])
  i4582.nearClipPlane = i4583[8]
  i4582.farClipPlane = i4583[9]
  i4582.fieldOfView = i4583[10]
  i4582.depth = i4583[11]
  i4582.clearFlags = i4583[12]
  i4582.cullingMask = i4583[13]
  i4582.rect = i4583[14]
  request.r(i4583[15], i4583[16], 0, i4582, 'targetTexture')
  i4582.usePhysicalProperties = !!i4583[17]
  i4582.focalLength = i4583[18]
  i4582.sensorSize = new pc.Vec2( i4583[19], i4583[20] )
  i4582.lensShift = new pc.Vec2( i4583[21], i4583[22] )
  i4582.gateFit = i4583[23]
  i4582.commandBufferCount = i4583[24]
  i4582.cameraType = i4583[25]
  return i4582
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i4584 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i4585 = data
  i4584.m_RenderShadows = !!i4585[0]
  i4584.m_RequiresDepthTextureOption = i4585[1]
  i4584.m_RequiresOpaqueTextureOption = i4585[2]
  i4584.m_CameraType = i4585[3]
  var i4587 = i4585[4]
  var i4586 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i4587.length; i += 2) {
  request.r(i4587[i + 0], i4587[i + 1], 1, i4586, '')
  }
  i4584.m_Cameras = i4586
  i4584.m_RendererIndex = i4585[5]
  i4584.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i4585[6] )
  request.r(i4585[7], i4585[8], 0, i4584, 'm_VolumeTrigger')
  i4584.m_VolumeFrameworkUpdateModeOption = i4585[9]
  i4584.m_RenderPostProcessing = !!i4585[10]
  i4584.m_Antialiasing = i4585[11]
  i4584.m_AntialiasingQuality = i4585[12]
  i4584.m_StopNaN = !!i4585[13]
  i4584.m_Dithering = !!i4585[14]
  i4584.m_ClearDepth = !!i4585[15]
  i4584.m_AllowXRRendering = !!i4585[16]
  i4584.m_AllowHDROutput = !!i4585[17]
  i4584.m_UseScreenCoordOverride = !!i4585[18]
  i4584.m_ScreenSizeOverride = new pc.Vec4( i4585[19], i4585[20], i4585[21], i4585[22] )
  i4584.m_ScreenCoordScaleBias = new pc.Vec4( i4585[23], i4585[24], i4585[25], i4585[26] )
  i4584.m_RequiresDepthTexture = !!i4585[27]
  i4584.m_RequiresColorTexture = !!i4585[28]
  i4584.m_Version = i4585[29]
  i4584.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i4585[30], i4584.m_TaaSettings)
  return i4584
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i4590 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i4591 = data
  i4590.m_Quality = i4591[0]
  i4590.m_FrameInfluence = i4591[1]
  i4590.m_JitterScale = i4591[2]
  i4590.m_MipBias = i4591[3]
  i4590.m_VarianceClampScale = i4591[4]
  i4590.m_ContrastAdaptiveSharpening = i4591[5]
  return i4590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i4592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i4593 = data
  i4592.enabled = !!i4593[0]
  i4592.type = i4593[1]
  i4592.color = new pc.Color(i4593[2], i4593[3], i4593[4], i4593[5])
  i4592.cullingMask = i4593[6]
  i4592.intensity = i4593[7]
  i4592.range = i4593[8]
  i4592.spotAngle = i4593[9]
  i4592.shadows = i4593[10]
  i4592.shadowNormalBias = i4593[11]
  i4592.shadowBias = i4593[12]
  i4592.shadowStrength = i4593[13]
  i4592.shadowResolution = i4593[14]
  i4592.lightmapBakeType = i4593[15]
  i4592.renderMode = i4593[16]
  request.r(i4593[17], i4593[18], 0, i4592, 'cookie')
  i4592.cookieSize = i4593[19]
  return i4592
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i4594 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i4595 = data
  i4594.m_Version = i4595[0]
  i4594.m_UsePipelineSettings = !!i4595[1]
  i4594.m_AdditionalLightsShadowResolutionTier = i4595[2]
  i4594.m_LightLayerMask = i4595[3]
  i4594.m_RenderingLayers = i4595[4]
  i4594.m_CustomShadowLayers = !!i4595[5]
  i4594.m_ShadowLayerMask = i4595[6]
  i4594.m_ShadowRenderingLayers = i4595[7]
  i4594.m_LightCookieSize = new pc.Vec2( i4595[8], i4595[9] )
  i4594.m_LightCookieOffset = new pc.Vec2( i4595[10], i4595[11] )
  i4594.m_SoftShadowQuality = i4595[12]
  return i4594
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i4596 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i4597 = data
  i4596.priority = i4597[0]
  i4596.blendDistance = i4597[1]
  i4596.weight = i4597[2]
  request.r(i4597[3], i4597[4], 0, i4596, 'sharedProfile')
  i4596.m_IsGlobal = !!i4597[5]
  return i4596
}

Deserializers["BoxController"] = function (request, data, root) {
  var i4598 = root || request.c( 'BoxController' )
  var i4599 = data
  i4598.ease = i4599[0]
  i4598.dropDuration = i4599[1]
  i4598.startPosition = new pc.Vec3( i4599[2], i4599[3], i4599[4] )
  i4598.boxWidth = i4599[5]
  i4598.boxHeight = i4599[6]
  i4598.spacingX = i4599[7]
  i4598.floorCount = i4599[8]
  request.r(i4599[9], i4599[10], 0, i4598, 'boxPrefab')
  var i4601 = i4599[11]
  var i4600 = []
  for(var i = 0; i < i4601.length; i += 2) {
  request.r(i4601[i + 0], i4601[i + 1], 2, i4600, '')
  }
  i4598.floorMaterials = i4600
  var i4603 = i4599[12]
  var i4602 = []
  for(var i = 0; i < i4603.length; i += 2) {
  request.r(i4603[i + 0], i4603[i + 1], 2, i4602, '')
  }
  i4598.goodsMaterials = i4602
  return i4598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4605 = data
  i4604.pivot = new pc.Vec2( i4605[0], i4605[1] )
  i4604.anchorMin = new pc.Vec2( i4605[2], i4605[3] )
  i4604.anchorMax = new pc.Vec2( i4605[4], i4605[5] )
  i4604.sizeDelta = new pc.Vec2( i4605[6], i4605[7] )
  i4604.anchoredPosition3D = new pc.Vec3( i4605[8], i4605[9], i4605[10] )
  i4604.rotation = new pc.Quat(i4605[11], i4605[12], i4605[13], i4605[14])
  i4604.scale = new pc.Vec3( i4605[15], i4605[16], i4605[17] )
  return i4604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4607 = data
  i4606.enabled = !!i4607[0]
  i4606.planeDistance = i4607[1]
  i4606.referencePixelsPerUnit = i4607[2]
  i4606.isFallbackOverlay = !!i4607[3]
  i4606.renderMode = i4607[4]
  i4606.renderOrder = i4607[5]
  i4606.sortingLayerName = i4607[6]
  i4606.sortingOrder = i4607[7]
  i4606.scaleFactor = i4607[8]
  request.r(i4607[9], i4607[10], 0, i4606, 'worldCamera')
  i4606.overrideSorting = !!i4607[11]
  i4606.pixelPerfect = !!i4607[12]
  i4606.targetDisplay = i4607[13]
  i4606.overridePixelPerfect = !!i4607[14]
  return i4606
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4608 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4609 = data
  i4608.m_UiScaleMode = i4609[0]
  i4608.m_ReferencePixelsPerUnit = i4609[1]
  i4608.m_ScaleFactor = i4609[2]
  i4608.m_ReferenceResolution = new pc.Vec2( i4609[3], i4609[4] )
  i4608.m_ScreenMatchMode = i4609[5]
  i4608.m_MatchWidthOrHeight = i4609[6]
  i4608.m_PhysicalUnit = i4609[7]
  i4608.m_FallbackScreenDPI = i4609[8]
  i4608.m_DefaultSpriteDPI = i4609[9]
  i4608.m_DynamicPixelsPerUnit = i4609[10]
  i4608.m_PresetInfoIsWorld = !!i4609[11]
  return i4608
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4610 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4611 = data
  i4610.m_IgnoreReversedGraphics = !!i4611[0]
  i4610.m_BlockingObjects = i4611[1]
  i4610.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4611[2] )
  return i4610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4613 = data
  i4612.cullTransparentMesh = !!i4613[0]
  return i4612
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4614 = root || request.c( 'UnityEngine.UI.Image' )
  var i4615 = data
  request.r(i4615[0], i4615[1], 0, i4614, 'm_Sprite')
  i4614.m_Type = i4615[2]
  i4614.m_PreserveAspect = !!i4615[3]
  i4614.m_FillCenter = !!i4615[4]
  i4614.m_FillMethod = i4615[5]
  i4614.m_FillAmount = i4615[6]
  i4614.m_FillClockwise = !!i4615[7]
  i4614.m_FillOrigin = i4615[8]
  i4614.m_UseSpriteMesh = !!i4615[9]
  i4614.m_PixelsPerUnitMultiplier = i4615[10]
  request.r(i4615[11], i4615[12], 0, i4614, 'm_Material')
  i4614.m_Maskable = !!i4615[13]
  i4614.m_Color = new pc.Color(i4615[14], i4615[15], i4615[16], i4615[17])
  i4614.m_RaycastTarget = !!i4615[18]
  i4614.m_RaycastPadding = new pc.Vec4( i4615[19], i4615[20], i4615[21], i4615[22] )
  return i4614
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4616 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4617 = data
  request.r(i4617[0], i4617[1], 0, i4616, 'm_FirstSelected')
  i4616.m_sendNavigationEvents = !!i4617[2]
  i4616.m_DragThreshold = i4617[3]
  return i4616
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4618 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4619 = data
  i4618.m_HorizontalAxis = i4619[0]
  i4618.m_VerticalAxis = i4619[1]
  i4618.m_SubmitButton = i4619[2]
  i4618.m_CancelButton = i4619[3]
  i4618.m_InputActionsPerSecond = i4619[4]
  i4618.m_RepeatDelay = i4619[5]
  i4618.m_ForceModuleActive = !!i4619[6]
  i4618.m_SendPointerHoverToParent = !!i4619[7]
  return i4618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4621 = data
  i4620.ambientIntensity = i4621[0]
  i4620.reflectionIntensity = i4621[1]
  i4620.ambientMode = i4621[2]
  i4620.ambientLight = new pc.Color(i4621[3], i4621[4], i4621[5], i4621[6])
  i4620.ambientSkyColor = new pc.Color(i4621[7], i4621[8], i4621[9], i4621[10])
  i4620.ambientGroundColor = new pc.Color(i4621[11], i4621[12], i4621[13], i4621[14])
  i4620.ambientEquatorColor = new pc.Color(i4621[15], i4621[16], i4621[17], i4621[18])
  i4620.fogColor = new pc.Color(i4621[19], i4621[20], i4621[21], i4621[22])
  i4620.fogEndDistance = i4621[23]
  i4620.fogStartDistance = i4621[24]
  i4620.fogDensity = i4621[25]
  i4620.fog = !!i4621[26]
  request.r(i4621[27], i4621[28], 0, i4620, 'skybox')
  i4620.fogMode = i4621[29]
  var i4623 = i4621[30]
  var i4622 = []
  for(var i = 0; i < i4623.length; i += 1) {
    i4622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4623[i + 0]) );
  }
  i4620.lightmaps = i4622
  i4620.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4621[31], i4620.lightProbes)
  i4620.lightmapsMode = i4621[32]
  i4620.mixedBakeMode = i4621[33]
  i4620.environmentLightingMode = i4621[34]
  i4620.ambientProbe = new pc.SphericalHarmonicsL2(i4621[35])
  i4620.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4621[36])
  i4620.useReferenceAmbientProbe = !!i4621[37]
  request.r(i4621[38], i4621[39], 0, i4620, 'customReflection')
  request.r(i4621[40], i4621[41], 0, i4620, 'defaultReflection')
  i4620.defaultReflectionMode = i4621[42]
  i4620.defaultReflectionResolution = i4621[43]
  i4620.sunLightObjectId = i4621[44]
  i4620.pixelLightCount = i4621[45]
  i4620.defaultReflectionHDR = !!i4621[46]
  i4620.hasLightDataAsset = !!i4621[47]
  i4620.hasManualGenerate = !!i4621[48]
  return i4620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4627 = data
  request.r(i4627[0], i4627[1], 0, i4626, 'lightmapColor')
  request.r(i4627[2], i4627[3], 0, i4626, 'lightmapDirection')
  return i4626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4628 = root || new UnityEngine.LightProbes()
  var i4629 = data
  return i4628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i4636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i4637 = data
  i4636.AdditionalLightsPerObjectLimit = i4637[0]
  i4636.AdditionalLightsRenderingMode = i4637[1]
  i4636.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i4637[2], i4636.LightRenderingMode)
  i4636.ColorGradingLutSize = i4637[3]
  i4636.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i4637[4], i4636.ColorGradingMode)
  i4636.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i4637[5], i4636.MainLightRenderingMode)
  i4636.MainLightRenderingModeValue = i4637[6]
  i4636.SupportsMainLightShadows = !!i4637[7]
  i4636.MixedLightingSupported = !!i4637[8]
  i4636.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i4637[9], i4636.MsaaQuality)
  i4636.MSAA = i4637[10]
  i4636.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i4637[11], i4636.OpaqueDownsampling)
  i4636.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i4637[12], i4636.MainLightShadowmapResolution)
  i4636.MainLightShadowmapResolutionValue = i4637[13]
  i4636.SupportsSoftShadows = !!i4637[14]
  i4636.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i4637[15], i4636.SoftShadowQuality)
  i4636.SoftShadowQualityValue = i4637[16]
  i4636.ShadowDistance = i4637[17]
  i4636.ShadowCascadeCount = i4637[18]
  i4636.Cascade2Split = i4637[19]
  i4636.Cascade3Split = new pc.Vec2( i4637[20], i4637[21] )
  i4636.Cascade4Split = new pc.Vec3( i4637[22], i4637[23], i4637[24] )
  i4636.CascadeBorder = i4637[25]
  i4636.ShadowDepthBias = i4637[26]
  i4636.ShadowNormalBias = i4637[27]
  i4636.RenderScale = i4637[28]
  i4636.RequireDepthTexture = !!i4637[29]
  i4636.RequireOpaqueTexture = !!i4637[30]
  i4636.SupportsHDR = !!i4637[31]
  i4636.SupportsTerrainHoles = !!i4637[32]
  return i4636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i4638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i4639 = data
  i4638.Disabled = i4639[0]
  i4638.PerVertex = i4639[1]
  i4638.PerPixel = i4639[2]
  return i4638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i4640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i4641 = data
  i4640.LowDynamicRange = i4641[0]
  i4640.HighDynamicRange = i4641[1]
  return i4640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i4642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i4643 = data
  i4642.Disabled = i4643[0]
  i4642._2x = i4643[1]
  i4642._4x = i4643[2]
  i4642._8x = i4643[3]
  return i4642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i4644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i4645 = data
  i4644.None = i4645[0]
  i4644._2xBilinear = i4645[1]
  i4644._4xBox = i4645[2]
  i4644._4xBilinear = i4645[3]
  return i4644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i4646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i4647 = data
  i4646._256 = i4647[0]
  i4646._512 = i4647[1]
  i4646._1024 = i4647[2]
  i4646._2048 = i4647[3]
  i4646._4096 = i4647[4]
  return i4646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i4648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i4649 = data
  i4648.UsePipelineSettings = i4649[0]
  i4648.Low = i4649[1]
  i4648.Medium = i4649[2]
  i4648.High = i4649[3]
  return i4648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4651 = data
  var i4653 = i4651[0]
  var i4652 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4653.length; i += 1) {
    i4652.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4653[i + 0]));
  }
  i4650.ShaderCompilationErrors = i4652
  i4650.name = i4651[1]
  i4650.guid = i4651[2]
  var i4655 = i4651[3]
  var i4654 = []
  for(var i = 0; i < i4655.length; i += 1) {
    i4654.push( i4655[i + 0] );
  }
  i4650.shaderDefinedKeywords = i4654
  var i4657 = i4651[4]
  var i4656 = []
  for(var i = 0; i < i4657.length; i += 1) {
    i4656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4657[i + 0]) );
  }
  i4650.passes = i4656
  var i4659 = i4651[5]
  var i4658 = []
  for(var i = 0; i < i4659.length; i += 1) {
    i4658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4659[i + 0]) );
  }
  i4650.usePasses = i4658
  var i4661 = i4651[6]
  var i4660 = []
  for(var i = 0; i < i4661.length; i += 1) {
    i4660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4661[i + 0]) );
  }
  i4650.defaultParameterValues = i4660
  request.r(i4651[7], i4651[8], 0, i4650, 'unityFallbackShader')
  i4650.readDepth = !!i4651[9]
  i4650.isCreatedByShaderGraph = !!i4651[10]
  i4650.compiled = !!i4651[11]
  return i4650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4665 = data
  i4664.shaderName = i4665[0]
  i4664.errorMessage = i4665[1]
  return i4664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4670 = root || new pc.UnityShaderPass()
  var i4671 = data
  i4670.id = i4671[0]
  i4670.subShaderIndex = i4671[1]
  i4670.name = i4671[2]
  i4670.passType = i4671[3]
  i4670.grabPassTextureName = i4671[4]
  i4670.usePass = !!i4671[5]
  i4670.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4671[6], i4670.zTest)
  i4670.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4671[7], i4670.zWrite)
  i4670.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4671[8], i4670.culling)
  i4670.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4671[9], i4670.blending)
  i4670.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4671[10], i4670.alphaBlending)
  i4670.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4671[11], i4670.colorWriteMask)
  i4670.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4671[12], i4670.offsetUnits)
  i4670.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4671[13], i4670.offsetFactor)
  i4670.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4671[14], i4670.stencilRef)
  i4670.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4671[15], i4670.stencilReadMask)
  i4670.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4671[16], i4670.stencilWriteMask)
  i4670.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4671[17], i4670.stencilOp)
  i4670.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4671[18], i4670.stencilOpFront)
  i4670.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4671[19], i4670.stencilOpBack)
  var i4673 = i4671[20]
  var i4672 = []
  for(var i = 0; i < i4673.length; i += 1) {
    i4672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4673[i + 0]) );
  }
  i4670.tags = i4672
  var i4675 = i4671[21]
  var i4674 = []
  for(var i = 0; i < i4675.length; i += 1) {
    i4674.push( i4675[i + 0] );
  }
  i4670.passDefinedKeywords = i4674
  var i4677 = i4671[22]
  var i4676 = []
  for(var i = 0; i < i4677.length; i += 1) {
    i4676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4677[i + 0]) );
  }
  i4670.passDefinedKeywordGroups = i4676
  var i4679 = i4671[23]
  var i4678 = []
  for(var i = 0; i < i4679.length; i += 1) {
    i4678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4679[i + 0]) );
  }
  i4670.variants = i4678
  var i4681 = i4671[24]
  var i4680 = []
  for(var i = 0; i < i4681.length; i += 1) {
    i4680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4681[i + 0]) );
  }
  i4670.excludedVariants = i4680
  i4670.hasDepthReader = !!i4671[25]
  return i4670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4683 = data
  i4682.val = i4683[0]
  i4682.name = i4683[1]
  return i4682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4685 = data
  i4684.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4685[0], i4684.src)
  i4684.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4685[1], i4684.dst)
  i4684.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4685[2], i4684.op)
  return i4684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4687 = data
  i4686.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4687[0], i4686.pass)
  i4686.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4687[1], i4686.fail)
  i4686.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4687[2], i4686.zFail)
  i4686.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4687[3], i4686.comp)
  return i4686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4691 = data
  i4690.name = i4691[0]
  i4690.value = i4691[1]
  return i4690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4695 = data
  var i4697 = i4695[0]
  var i4696 = []
  for(var i = 0; i < i4697.length; i += 1) {
    i4696.push( i4697[i + 0] );
  }
  i4694.keywords = i4696
  i4694.hasDiscard = !!i4695[1]
  return i4694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4701 = data
  i4700.passId = i4701[0]
  i4700.subShaderIndex = i4701[1]
  var i4703 = i4701[2]
  var i4702 = []
  for(var i = 0; i < i4703.length; i += 1) {
    i4702.push( i4703[i + 0] );
  }
  i4700.keywords = i4702
  i4700.vertexProgram = i4701[3]
  i4700.fragmentProgram = i4701[4]
  i4700.exportedForWebGl2 = !!i4701[5]
  i4700.readDepth = !!i4701[6]
  return i4700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4707 = data
  request.r(i4707[0], i4707[1], 0, i4706, 'shader')
  i4706.pass = i4707[2]
  return i4706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4711 = data
  i4710.name = i4711[0]
  i4710.type = i4711[1]
  i4710.value = new pc.Vec4( i4711[2], i4711[3], i4711[4], i4711[5] )
  i4710.textureValue = i4711[6]
  i4710.shaderPropertyFlag = i4711[7]
  return i4710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4713 = data
  i4712.name = i4713[0]
  request.r(i4713[1], i4713[2], 0, i4712, 'texture')
  i4712.aabb = i4713[3]
  i4712.vertices = i4713[4]
  i4712.triangles = i4713[5]
  i4712.textureRect = UnityEngine.Rect.MinMaxRect(i4713[6], i4713[7], i4713[8], i4713[9])
  i4712.packedRect = UnityEngine.Rect.MinMaxRect(i4713[10], i4713[11], i4713[12], i4713[13])
  i4712.border = new pc.Vec4( i4713[14], i4713[15], i4713[16], i4713[17] )
  i4712.transparency = i4713[18]
  i4712.bounds = i4713[19]
  i4712.pixelsPerUnit = i4713[20]
  i4712.textureWidth = i4713[21]
  i4712.textureHeight = i4713[22]
  i4712.nativeSize = new pc.Vec2( i4713[23], i4713[24] )
  i4712.pivot = new pc.Vec2( i4713[25], i4713[26] )
  i4712.textureRectOffset = new pc.Vec2( i4713[27], i4713[28] )
  return i4712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4715 = data
  i4714.name = i4715[0]
  return i4714
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i4716 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i4717 = data
  var i4719 = i4717[0]
  var i4718 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i4719.length; i += 2) {
  request.r(i4719[i + 0], i4719[i + 1], 1, i4718, '')
  }
  i4716.components = i4718
  return i4716
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i4722 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i4723 = data
  i4722.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i4723[0], i4722.mode)
  i4722.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i4723[1], i4722.neutralHDRRangeReductionMode)
  i4722.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i4723[2], i4722.acesPreset)
  i4722.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i4723[3], i4722.hueShiftAmount)
  i4722.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i4723[4], i4722.detectPaperWhite)
  i4722.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i4723[5], i4722.paperWhite)
  i4722.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i4723[6], i4722.detectBrightnessLimits)
  i4722.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i4723[7], i4722.minNits)
  i4722.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i4723[8], i4722.maxNits)
  i4722.active = !!i4723[9]
  return i4722
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i4724 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i4725 = data
  i4724.m_Value = i4725[0]
  i4724.m_OverrideState = !!i4725[1]
  return i4724
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i4726 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i4727 = data
  i4726.m_Value = i4727[0]
  i4726.m_OverrideState = !!i4727[1]
  return i4726
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i4728 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i4729 = data
  i4728.m_Value = i4729[0]
  i4728.m_OverrideState = !!i4729[1]
  return i4728
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i4730 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i4731 = data
  i4730.m_Value = i4731[0]
  i4730.m_OverrideState = !!i4731[1]
  return i4730
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i4732 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i4733 = data
  i4732.m_Value = !!i4733[0]
  i4732.m_OverrideState = !!i4733[1]
  return i4732
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i4734 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i4735 = data
  i4734.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i4735[0], i4734.skipIterations)
  i4734.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i4735[1], i4734.threshold)
  i4734.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i4735[2], i4734.intensity)
  i4734.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i4735[3], i4734.scatter)
  i4734.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i4735[4], i4734.clamp)
  i4734.tint = request.d('UnityEngine.Rendering.ColorParameter', i4735[5], i4734.tint)
  i4734.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i4735[6], i4734.highQualityFiltering)
  i4734.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i4735[7], i4734.downscale)
  i4734.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i4735[8], i4734.maxIterations)
  i4734.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i4735[9], i4734.dirtTexture)
  i4734.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i4735[10], i4734.dirtIntensity)
  i4734.active = !!i4735[11]
  return i4734
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i4736 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i4737 = data
  i4736.m_Value = i4737[0]
  i4736.m_OverrideState = !!i4737[1]
  return i4736
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i4738 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i4739 = data
  i4738.m_Value = i4739[0]
  i4738.m_OverrideState = !!i4739[1]
  return i4738
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i4740 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i4741 = data
  i4740.m_Value = new pc.Color(i4741[0], i4741[1], i4741[2], i4741[3])
  i4740.m_OverrideState = !!i4741[4]
  return i4740
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i4742 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i4743 = data
  i4742.m_Value = i4743[0]
  i4742.m_OverrideState = !!i4743[1]
  return i4742
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i4744 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i4745 = data
  i4744.dimension = i4745[0]
  request.r(i4745[1], i4745[2], 0, i4744, 'm_Value')
  i4744.m_OverrideState = !!i4745[3]
  return i4744
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i4746 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i4747 = data
  i4746.color = request.d('UnityEngine.Rendering.ColorParameter', i4747[0], i4746.color)
  i4746.center = request.d('UnityEngine.Rendering.Vector2Parameter', i4747[1], i4746.center)
  i4746.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i4747[2], i4746.intensity)
  i4746.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i4747[3], i4746.smoothness)
  i4746.rounded = request.d('UnityEngine.Rendering.BoolParameter', i4747[4], i4746.rounded)
  i4746.active = !!i4747[5]
  return i4746
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i4748 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i4749 = data
  i4748.m_Value = new pc.Vec2( i4749[0], i4749[1] )
  i4748.m_OverrideState = !!i4749[2]
  return i4748
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4750 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4751 = data
  i4750.useSafeMode = !!i4751[0]
  i4750.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4751[1], i4750.safeModeOptions)
  i4750.timeScale = i4751[2]
  i4750.unscaledTimeScale = i4751[3]
  i4750.useSmoothDeltaTime = !!i4751[4]
  i4750.maxSmoothUnscaledTime = i4751[5]
  i4750.rewindCallbackMode = i4751[6]
  i4750.showUnityEditorReport = !!i4751[7]
  i4750.logBehaviour = i4751[8]
  i4750.drawGizmos = !!i4751[9]
  i4750.defaultRecyclable = !!i4751[10]
  i4750.defaultAutoPlay = i4751[11]
  i4750.defaultUpdateType = i4751[12]
  i4750.defaultTimeScaleIndependent = !!i4751[13]
  i4750.defaultEaseType = i4751[14]
  i4750.defaultEaseOvershootOrAmplitude = i4751[15]
  i4750.defaultEasePeriod = i4751[16]
  i4750.defaultAutoKill = !!i4751[17]
  i4750.defaultLoopType = i4751[18]
  i4750.debugMode = !!i4751[19]
  i4750.debugStoreTargetId = !!i4751[20]
  i4750.showPreviewPanel = !!i4751[21]
  i4750.storeSettingsLocation = i4751[22]
  i4750.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4751[23], i4750.modules)
  i4750.createASMDEF = !!i4751[24]
  i4750.showPlayingTweens = !!i4751[25]
  i4750.showPausedTweens = !!i4751[26]
  return i4750
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4752 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4753 = data
  i4752.logBehaviour = i4753[0]
  i4752.nestedTweenFailureBehaviour = i4753[1]
  return i4752
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4754 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4755 = data
  i4754.showPanel = !!i4755[0]
  i4754.audioEnabled = !!i4755[1]
  i4754.physicsEnabled = !!i4755[2]
  i4754.physics2DEnabled = !!i4755[3]
  i4754.spriteEnabled = !!i4755[4]
  i4754.uiEnabled = !!i4755[5]
  i4754.textMeshProEnabled = !!i4755[6]
  i4754.tk2DEnabled = !!i4755[7]
  i4754.deAudioEnabled = !!i4755[8]
  i4754.deUnityExtendedEnabled = !!i4755[9]
  i4754.epoOutlineEnabled = !!i4755[10]
  return i4754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4757 = data
  var i4759 = i4757[0]
  var i4758 = []
  for(var i = 0; i < i4759.length; i += 1) {
    i4758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4759[i + 0]) );
  }
  i4756.files = i4758
  i4756.componentToPrefabIds = i4757[1]
  return i4756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4763 = data
  i4762.path = i4763[0]
  request.r(i4763[1], i4763[2], 0, i4762, 'unityObject')
  return i4762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4765 = data
  var i4767 = i4765[0]
  var i4766 = []
  for(var i = 0; i < i4767.length; i += 1) {
    i4766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4767[i + 0]) );
  }
  i4764.scriptsExecutionOrder = i4766
  var i4769 = i4765[1]
  var i4768 = []
  for(var i = 0; i < i4769.length; i += 1) {
    i4768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4769[i + 0]) );
  }
  i4764.sortingLayers = i4768
  var i4771 = i4765[2]
  var i4770 = []
  for(var i = 0; i < i4771.length; i += 1) {
    i4770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4771[i + 0]) );
  }
  i4764.cullingLayers = i4770
  i4764.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4765[3], i4764.timeSettings)
  i4764.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4765[4], i4764.physicsSettings)
  i4764.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4765[5], i4764.physics2DSettings)
  i4764.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4765[6], i4764.qualitySettings)
  i4764.enableRealtimeShadows = !!i4765[7]
  i4764.enableAutoInstancing = !!i4765[8]
  i4764.enableDynamicBatching = !!i4765[9]
  i4764.lightmapEncodingQuality = i4765[10]
  i4764.desiredColorSpace = i4765[11]
  var i4773 = i4765[12]
  var i4772 = []
  for(var i = 0; i < i4773.length; i += 1) {
    i4772.push( i4773[i + 0] );
  }
  i4764.allTags = i4772
  return i4764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4777 = data
  i4776.name = i4777[0]
  i4776.value = i4777[1]
  return i4776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4781 = data
  i4780.id = i4781[0]
  i4780.name = i4781[1]
  i4780.value = i4781[2]
  return i4780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4785 = data
  i4784.id = i4785[0]
  i4784.name = i4785[1]
  return i4784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4787 = data
  i4786.fixedDeltaTime = i4787[0]
  i4786.maximumDeltaTime = i4787[1]
  i4786.timeScale = i4787[2]
  i4786.maximumParticleTimestep = i4787[3]
  return i4786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4789 = data
  i4788.gravity = new pc.Vec3( i4789[0], i4789[1], i4789[2] )
  i4788.defaultSolverIterations = i4789[3]
  i4788.bounceThreshold = i4789[4]
  i4788.autoSyncTransforms = !!i4789[5]
  i4788.autoSimulation = !!i4789[6]
  var i4791 = i4789[7]
  var i4790 = []
  for(var i = 0; i < i4791.length; i += 1) {
    i4790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4791[i + 0]) );
  }
  i4788.collisionMatrix = i4790
  return i4788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4795 = data
  i4794.enabled = !!i4795[0]
  i4794.layerId = i4795[1]
  i4794.otherLayerId = i4795[2]
  return i4794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4797 = data
  request.r(i4797[0], i4797[1], 0, i4796, 'material')
  i4796.gravity = new pc.Vec2( i4797[2], i4797[3] )
  i4796.positionIterations = i4797[4]
  i4796.velocityIterations = i4797[5]
  i4796.velocityThreshold = i4797[6]
  i4796.maxLinearCorrection = i4797[7]
  i4796.maxAngularCorrection = i4797[8]
  i4796.maxTranslationSpeed = i4797[9]
  i4796.maxRotationSpeed = i4797[10]
  i4796.baumgarteScale = i4797[11]
  i4796.baumgarteTOIScale = i4797[12]
  i4796.timeToSleep = i4797[13]
  i4796.linearSleepTolerance = i4797[14]
  i4796.angularSleepTolerance = i4797[15]
  i4796.defaultContactOffset = i4797[16]
  i4796.autoSimulation = !!i4797[17]
  i4796.queriesHitTriggers = !!i4797[18]
  i4796.queriesStartInColliders = !!i4797[19]
  i4796.callbacksOnDisable = !!i4797[20]
  i4796.reuseCollisionCallbacks = !!i4797[21]
  i4796.autoSyncTransforms = !!i4797[22]
  var i4799 = i4797[23]
  var i4798 = []
  for(var i = 0; i < i4799.length; i += 1) {
    i4798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4799[i + 0]) );
  }
  i4796.collisionMatrix = i4798
  return i4796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4803 = data
  i4802.enabled = !!i4803[0]
  i4802.layerId = i4803[1]
  i4802.otherLayerId = i4803[2]
  return i4802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4805 = data
  var i4807 = i4805[0]
  var i4806 = []
  for(var i = 0; i < i4807.length; i += 1) {
    i4806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4807[i + 0]) );
  }
  i4804.qualityLevels = i4806
  var i4809 = i4805[1]
  var i4808 = []
  for(var i = 0; i < i4809.length; i += 1) {
    i4808.push( i4809[i + 0] );
  }
  i4804.names = i4808
  i4804.shadows = i4805[2]
  i4804.anisotropicFiltering = i4805[3]
  i4804.antiAliasing = i4805[4]
  i4804.lodBias = i4805[5]
  i4804.shadowCascades = i4805[6]
  i4804.shadowDistance = i4805[7]
  i4804.shadowmaskMode = i4805[8]
  i4804.shadowProjection = i4805[9]
  i4804.shadowResolution = i4805[10]
  i4804.softParticles = !!i4805[11]
  i4804.softVegetation = !!i4805[12]
  i4804.activeColorSpace = i4805[13]
  i4804.desiredColorSpace = i4805[14]
  i4804.masterTextureLimit = i4805[15]
  i4804.maxQueuedFrames = i4805[16]
  i4804.particleRaycastBudget = i4805[17]
  i4804.pixelLightCount = i4805[18]
  i4804.realtimeReflectionProbes = !!i4805[19]
  i4804.shadowCascade2Split = i4805[20]
  i4804.shadowCascade4Split = new pc.Vec3( i4805[21], i4805[22], i4805[23] )
  i4804.streamingMipmapsActive = !!i4805[24]
  i4804.vSyncCount = i4805[25]
  i4804.asyncUploadBufferSize = i4805[26]
  i4804.asyncUploadTimeSlice = i4805[27]
  i4804.billboardsFaceCameraPosition = !!i4805[28]
  i4804.shadowNearPlaneOffset = i4805[29]
  i4804.streamingMipmapsMemoryBudget = i4805[30]
  i4804.maximumLODLevel = i4805[31]
  i4804.streamingMipmapsAddAllCameras = !!i4805[32]
  i4804.streamingMipmapsMaxLevelReduction = i4805[33]
  i4804.streamingMipmapsRenderersPerFrame = i4805[34]
  i4804.resolutionScalingFixedDPIFactor = i4805[35]
  i4804.streamingMipmapsMaxFileIORequests = i4805[36]
  i4804.currentQualityLevel = i4805[37]
  return i4804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4815 = data
  i4814.weight = i4815[0]
  i4814.vertices = i4815[1]
  i4814.normals = i4815[2]
  i4814.tangents = i4815[3]
  return i4814
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[14],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[14],"71":[3],"72":[73],"74":[73],"23":[22],"75":[27,76,22],"77":[22],"78":[14],"16":[14],"18":[17],"79":[80],"81":[22],"82":[22],"26":[23],"28":[27,22],"83":[22],"25":[23],"84":[22],"85":[22],"86":[22],"87":[22],"88":[22],"89":[22],"90":[22],"91":[22],"92":[22],"93":[27,22],"94":[22],"95":[22],"96":[22],"97":[22],"98":[27,22],"99":[22],"100":[30],"101":[30],"31":[30],"102":[30],"103":[14],"104":[14],"105":[80],"106":[22],"107":[3,22],"108":[22,27],"109":[22],"110":[27,22],"111":[3],"112":[27,22],"113":[22],"114":[80]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","Box","UnityEngine.GameObject","UnityEngine.Shader","UnityEngine.Texture2D","DraggableObject","Goods","GameManager","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","BoxController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioClip","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.ParticleSystem","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/07/2025 09:40:47";

Deserializers.lunaDaysRunning = "1.3";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "jkj9513-naver-com";

Deserializers.lunaAppID = "31170";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4535";

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

Deserializers.buildID = "8ccab839-5f70-4242-b965-e752c532aa7f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

