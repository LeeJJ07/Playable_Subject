var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5926 = root || request.c( 'UnityEngine.JointSpring' )
  var i5927 = data
  i5926.spring = i5927[0]
  i5926.damper = i5927[1]
  i5926.targetPosition = i5927[2]
  return i5926
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5928 = root || request.c( 'UnityEngine.JointMotor' )
  var i5929 = data
  i5928.m_TargetVelocity = i5929[0]
  i5928.m_Force = i5929[1]
  i5928.m_FreeSpin = i5929[2]
  return i5928
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5930 = root || request.c( 'UnityEngine.JointLimits' )
  var i5931 = data
  i5930.m_Min = i5931[0]
  i5930.m_Max = i5931[1]
  i5930.m_Bounciness = i5931[2]
  i5930.m_BounceMinVelocity = i5931[3]
  i5930.m_ContactDistance = i5931[4]
  i5930.minBounce = i5931[5]
  i5930.maxBounce = i5931[6]
  return i5930
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5932 = root || request.c( 'UnityEngine.JointDrive' )
  var i5933 = data
  i5932.m_PositionSpring = i5933[0]
  i5932.m_PositionDamper = i5933[1]
  i5932.m_MaximumForce = i5933[2]
  i5932.m_UseAcceleration = i5933[3]
  return i5932
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5934 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5935 = data
  i5934.m_Spring = i5935[0]
  i5934.m_Damper = i5935[1]
  return i5934
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5936 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5937 = data
  i5936.m_Limit = i5937[0]
  i5936.m_Bounciness = i5937[1]
  i5936.m_ContactDistance = i5937[2]
  return i5936
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5938 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5939 = data
  i5938.m_ExtremumSlip = i5939[0]
  i5938.m_ExtremumValue = i5939[1]
  i5938.m_AsymptoteSlip = i5939[2]
  i5938.m_AsymptoteValue = i5939[3]
  i5938.m_Stiffness = i5939[4]
  return i5938
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5940 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5941 = data
  i5940.m_LowerAngle = i5941[0]
  i5940.m_UpperAngle = i5941[1]
  return i5940
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5942 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5943 = data
  i5942.m_MotorSpeed = i5943[0]
  i5942.m_MaximumMotorTorque = i5943[1]
  return i5942
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5944 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5945 = data
  i5944.m_DampingRatio = i5945[0]
  i5944.m_Frequency = i5945[1]
  i5944.m_Angle = i5945[2]
  return i5944
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5946 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5947 = data
  i5946.m_LowerTranslation = i5947[0]
  i5946.m_UpperTranslation = i5947[1]
  return i5946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5949 = data
  i5948.position = new pc.Vec3( i5949[0], i5949[1], i5949[2] )
  i5948.scale = new pc.Vec3( i5949[3], i5949[4], i5949[5] )
  i5948.rotation = new pc.Quat(i5949[6], i5949[7], i5949[8], i5949[9])
  return i5948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5951 = data
  i5950.enabled = !!i5951[0]
  request.r(i5951[1], i5951[2], 0, i5950, 'sharedMaterial')
  var i5953 = i5951[3]
  var i5952 = []
  for(var i = 0; i < i5953.length; i += 2) {
  request.r(i5953[i + 0], i5953[i + 1], 2, i5952, '')
  }
  i5950.sharedMaterials = i5952
  i5950.receiveShadows = !!i5951[4]
  i5950.shadowCastingMode = i5951[5]
  i5950.sortingLayerID = i5951[6]
  i5950.sortingOrder = i5951[7]
  i5950.lightmapIndex = i5951[8]
  i5950.lightmapSceneIndex = i5951[9]
  i5950.lightmapScaleOffset = new pc.Vec4( i5951[10], i5951[11], i5951[12], i5951[13] )
  i5950.lightProbeUsage = i5951[14]
  i5950.reflectionProbeUsage = i5951[15]
  i5950.color = new pc.Color(i5951[16], i5951[17], i5951[18], i5951[19])
  request.r(i5951[20], i5951[21], 0, i5950, 'sprite')
  i5950.flipX = !!i5951[22]
  i5950.flipY = !!i5951[23]
  i5950.drawMode = i5951[24]
  i5950.size = new pc.Vec2( i5951[25], i5951[26] )
  i5950.tileMode = i5951[27]
  i5950.adaptiveModeThreshold = i5951[28]
  i5950.maskInteraction = i5951[29]
  i5950.spriteSortPoint = i5951[30]
  return i5950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5957 = data
  request.r(i5957[0], i5957[1], 0, i5956, 'animatorController')
  request.r(i5957[2], i5957[3], 0, i5956, 'avatar')
  i5956.updateMode = i5957[4]
  i5956.hasTransformHierarchy = !!i5957[5]
  i5956.applyRootMotion = !!i5957[6]
  var i5959 = i5957[7]
  var i5958 = []
  for(var i = 0; i < i5959.length; i += 2) {
  request.r(i5959[i + 0], i5959[i + 1], 2, i5958, '')
  }
  i5956.humanBones = i5958
  i5956.enabled = !!i5957[8]
  return i5956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i5962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i5963 = data
  i5962.bodyType = i5963[0]
  request.r(i5963[1], i5963[2], 0, i5962, 'material')
  i5962.simulated = !!i5963[3]
  i5962.useAutoMass = !!i5963[4]
  i5962.mass = i5963[5]
  i5962.drag = i5963[6]
  i5962.angularDrag = i5963[7]
  i5962.gravityScale = i5963[8]
  i5962.collisionDetectionMode = i5963[9]
  i5962.sleepMode = i5963[10]
  i5962.constraints = i5963[11]
  return i5962
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i5964 = root || request.c( 'PlayerController' )
  var i5965 = data
  request.r(i5965[0], i5965[1], 0, i5964, '_manager')
  i5964.moveSpeed = i5965[2]
  request.r(i5965[3], i5965[4], 0, i5964, 'hand')
  request.r(i5965[5], i5965[6], 0, i5964, 'introText')
  request.r(i5965[7], i5965[8], 0, i5964, 'targetObj')
  var i5967 = i5965[9]
  var i5966 = []
  for(var i = 0; i < i5967.length; i += 2) {
  request.r(i5967[i + 0], i5967[i + 1], 2, i5966, '')
  }
  i5964.player = i5966
  request.r(i5965[10], i5965[11], 0, i5964, 'cam')
  i5964.offScreen = i5965[12]
  i5964.ClampledValue = i5965[13]
  request.r(i5965[14], i5965[15], 0, i5964, 'anim')
  return i5964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i5970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i5971 = data
  i5970.usedByComposite = !!i5971[0]
  i5970.autoTiling = !!i5971[1]
  i5970.size = new pc.Vec2( i5971[2], i5971[3] )
  i5970.edgeRadius = i5971[4]
  i5970.enabled = !!i5971[5]
  i5970.isTrigger = !!i5971[6]
  i5970.usedByEffector = !!i5971[7]
  i5970.density = i5971[8]
  i5970.offset = new pc.Vec2( i5971[9], i5971[10] )
  request.r(i5971[11], i5971[12], 0, i5970, 'material')
  return i5970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5973 = data
  i5972.name = i5973[0]
  i5972.tagId = i5973[1]
  i5972.enabled = !!i5973[2]
  i5972.isStatic = !!i5973[3]
  i5972.layer = i5973[4]
  return i5972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5974 = root || new pc.UnityMaterial()
  var i5975 = data
  i5974.name = i5975[0]
  request.r(i5975[1], i5975[2], 0, i5974, 'shader')
  i5974.renderQueue = i5975[3]
  i5974.enableInstancing = !!i5975[4]
  var i5977 = i5975[5]
  var i5976 = []
  for(var i = 0; i < i5977.length; i += 1) {
    i5976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5977[i + 0]) );
  }
  i5974.floatParameters = i5976
  var i5979 = i5975[6]
  var i5978 = []
  for(var i = 0; i < i5979.length; i += 1) {
    i5978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5979[i + 0]) );
  }
  i5974.colorParameters = i5978
  var i5981 = i5975[7]
  var i5980 = []
  for(var i = 0; i < i5981.length; i += 1) {
    i5980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5981[i + 0]) );
  }
  i5974.vectorParameters = i5980
  var i5983 = i5975[8]
  var i5982 = []
  for(var i = 0; i < i5983.length; i += 1) {
    i5982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5983[i + 0]) );
  }
  i5974.textureParameters = i5982
  var i5985 = i5975[9]
  var i5984 = []
  for(var i = 0; i < i5985.length; i += 1) {
    i5984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5985[i + 0]) );
  }
  i5974.materialFlags = i5984
  return i5974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5989 = data
  i5988.name = i5989[0]
  i5988.value = i5989[1]
  return i5988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5993 = data
  i5992.name = i5993[0]
  i5992.value = new pc.Color(i5993[1], i5993[2], i5993[3], i5993[4])
  return i5992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5997 = data
  i5996.name = i5997[0]
  i5996.value = new pc.Vec4( i5997[1], i5997[2], i5997[3], i5997[4] )
  return i5996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6001 = data
  i6000.name = i6001[0]
  request.r(i6001[1], i6001[2], 0, i6000, 'value')
  return i6000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6005 = data
  i6004.name = i6005[0]
  i6004.enabled = !!i6005[1]
  return i6004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6007 = data
  i6006.name = i6007[0]
  i6006.width = i6007[1]
  i6006.height = i6007[2]
  i6006.mipmapCount = i6007[3]
  i6006.anisoLevel = i6007[4]
  i6006.filterMode = i6007[5]
  i6006.hdr = !!i6007[6]
  i6006.format = i6007[7]
  i6006.wrapMode = i6007[8]
  i6006.alphaIsTransparency = !!i6007[9]
  i6006.alphaSource = i6007[10]
  i6006.graphicsFormat = i6007[11]
  i6006.sRGBTexture = !!i6007[12]
  i6006.desiredColorSpace = i6007[13]
  i6006.wrapU = i6007[14]
  i6006.wrapV = i6007[15]
  return i6006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6009 = data
  i6008.pivot = new pc.Vec2( i6009[0], i6009[1] )
  i6008.anchorMin = new pc.Vec2( i6009[2], i6009[3] )
  i6008.anchorMax = new pc.Vec2( i6009[4], i6009[5] )
  i6008.sizeDelta = new pc.Vec2( i6009[6], i6009[7] )
  i6008.anchoredPosition3D = new pc.Vec3( i6009[8], i6009[9], i6009[10] )
  i6008.rotation = new pc.Quat(i6009[11], i6009[12], i6009[13], i6009[14])
  i6008.scale = new pc.Vec3( i6009[15], i6009[16], i6009[17] )
  return i6008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6011 = data
  i6010.cullTransparentMesh = !!i6011[0]
  return i6010
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6012 = root || request.c( 'UnityEngine.UI.Image' )
  var i6013 = data
  request.r(i6013[0], i6013[1], 0, i6012, 'm_Sprite')
  i6012.m_Type = i6013[2]
  i6012.m_PreserveAspect = !!i6013[3]
  i6012.m_FillCenter = !!i6013[4]
  i6012.m_FillMethod = i6013[5]
  i6012.m_FillAmount = i6013[6]
  i6012.m_FillClockwise = !!i6013[7]
  i6012.m_FillOrigin = i6013[8]
  i6012.m_UseSpriteMesh = !!i6013[9]
  i6012.m_PixelsPerUnitMultiplier = i6013[10]
  request.r(i6013[11], i6013[12], 0, i6012, 'm_Material')
  i6012.m_Maskable = !!i6013[13]
  i6012.m_Color = new pc.Color(i6013[14], i6013[15], i6013[16], i6013[17])
  i6012.m_RaycastTarget = !!i6013[18]
  i6012.m_RaycastPadding = new pc.Vec4( i6013[19], i6013[20], i6013[21], i6013[22] )
  return i6012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i6014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i6015 = data
  i6014.enabled = !!i6015[0]
  i6014.isTrigger = !!i6015[1]
  i6014.usedByEffector = !!i6015[2]
  i6014.density = i6015[3]
  i6014.offset = new pc.Vec2( i6015[4], i6015[5] )
  request.r(i6015[6], i6015[7], 0, i6014, 'material')
  i6014.edgeRadius = i6015[8]
  var i6017 = i6015[9]
  var i6016 = []
  for(var i = 0; i < i6017.length; i += 2) {
    i6016.push( new pc.Vec2( i6017[i + 0], i6017[i + 1] ) );
  }
  i6014.points = i6016
  i6014.useAdjacentStartPoint = !!i6015[10]
  i6014.adjacentStartPoint = new pc.Vec2( i6015[11], i6015[12] )
  i6014.useAdjacentEndPoint = !!i6015[13]
  i6014.adjacentEndPoint = new pc.Vec2( i6015[14], i6015[15] )
  return i6014
}

Deserializers["PlatformScript"] = function (request, data, root) {
  var i6020 = root || request.c( 'PlatformScript' )
  var i6021 = data
  i6020.jumpForce = i6021[0]
  return i6020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PlatformEffector2D"] = function (request, data, root) {
  var i6022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PlatformEffector2D' )
  var i6023 = data
  i6022.enabled = !!i6023[0]
  i6022.useColliderMask = !!i6023[1]
  i6022.colliderMask = i6023[2]
  return i6022
}

Deserializers["Shroom"] = function (request, data, root) {
  var i6024 = root || request.c( 'Shroom' )
  var i6025 = data
  request.r(i6025[0], i6025[1], 0, i6024, 'particle')
  return i6024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6027 = data
  i6026.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6027[0], i6026.main)
  i6026.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6027[1], i6026.colorBySpeed)
  i6026.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6027[2], i6026.colorOverLifetime)
  i6026.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6027[3], i6026.emission)
  i6026.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6027[4], i6026.rotationBySpeed)
  i6026.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6027[5], i6026.rotationOverLifetime)
  i6026.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6027[6], i6026.shape)
  i6026.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6027[7], i6026.sizeBySpeed)
  i6026.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6027[8], i6026.sizeOverLifetime)
  i6026.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6027[9], i6026.textureSheetAnimation)
  i6026.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6027[10], i6026.velocityOverLifetime)
  i6026.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6027[11], i6026.noise)
  i6026.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6027[12], i6026.inheritVelocity)
  i6026.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6027[13], i6026.forceOverLifetime)
  i6026.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6027[14], i6026.limitVelocityOverLifetime)
  i6026.useAutoRandomSeed = !!i6027[15]
  i6026.randomSeed = i6027[16]
  return i6026
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6028 = root || new pc.ParticleSystemMain()
  var i6029 = data
  i6028.duration = i6029[0]
  i6028.loop = !!i6029[1]
  i6028.prewarm = !!i6029[2]
  i6028.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6029[3], i6028.startDelay)
  i6028.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6029[4], i6028.startLifetime)
  i6028.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6029[5], i6028.startSpeed)
  i6028.startSize3D = !!i6029[6]
  i6028.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6029[7], i6028.startSizeX)
  i6028.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6029[8], i6028.startSizeY)
  i6028.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6029[9], i6028.startSizeZ)
  i6028.startRotation3D = !!i6029[10]
  i6028.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6029[11], i6028.startRotationX)
  i6028.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6029[12], i6028.startRotationY)
  i6028.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6029[13], i6028.startRotationZ)
  i6028.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6029[14], i6028.startColor)
  i6028.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6029[15], i6028.gravityModifier)
  i6028.simulationSpace = i6029[16]
  request.r(i6029[17], i6029[18], 0, i6028, 'customSimulationSpace')
  i6028.simulationSpeed = i6029[19]
  i6028.useUnscaledTime = !!i6029[20]
  i6028.scalingMode = i6029[21]
  i6028.playOnAwake = !!i6029[22]
  i6028.maxParticles = i6029[23]
  i6028.emitterVelocityMode = i6029[24]
  i6028.stopAction = i6029[25]
  return i6028
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6030 = root || new pc.MinMaxCurve()
  var i6031 = data
  i6030.mode = i6031[0]
  i6030.curveMin = new pc.AnimationCurve( { keys_flow: i6031[1] } )
  i6030.curveMax = new pc.AnimationCurve( { keys_flow: i6031[2] } )
  i6030.curveMultiplier = i6031[3]
  i6030.constantMin = i6031[4]
  i6030.constantMax = i6031[5]
  return i6030
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6032 = root || new pc.MinMaxGradient()
  var i6033 = data
  i6032.mode = i6033[0]
  i6032.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6033[1], i6032.gradientMin)
  i6032.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6033[2], i6032.gradientMax)
  i6032.colorMin = new pc.Color(i6033[3], i6033[4], i6033[5], i6033[6])
  i6032.colorMax = new pc.Color(i6033[7], i6033[8], i6033[9], i6033[10])
  return i6032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6035 = data
  i6034.mode = i6035[0]
  var i6037 = i6035[1]
  var i6036 = []
  for(var i = 0; i < i6037.length; i += 1) {
    i6036.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6037[i + 0]) );
  }
  i6034.colorKeys = i6036
  var i6039 = i6035[2]
  var i6038 = []
  for(var i = 0; i < i6039.length; i += 1) {
    i6038.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6039[i + 0]) );
  }
  i6034.alphaKeys = i6038
  return i6034
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6043 = data
  i6042.color = new pc.Color(i6043[0], i6043[1], i6043[2], i6043[3])
  i6042.time = i6043[4]
  return i6042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6047 = data
  i6046.alpha = i6047[0]
  i6046.time = i6047[1]
  return i6046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6048 = root || new pc.ParticleSystemColorBySpeed()
  var i6049 = data
  i6048.enabled = !!i6049[0]
  i6048.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6049[1], i6048.color)
  i6048.range = new pc.Vec2( i6049[2], i6049[3] )
  return i6048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6050 = root || new pc.ParticleSystemColorOverLifetime()
  var i6051 = data
  i6050.enabled = !!i6051[0]
  i6050.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6051[1], i6050.color)
  return i6050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6052 = root || new pc.ParticleSystemEmitter()
  var i6053 = data
  i6052.enabled = !!i6053[0]
  i6052.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6053[1], i6052.rateOverTime)
  i6052.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6053[2], i6052.rateOverDistance)
  var i6055 = i6053[3]
  var i6054 = []
  for(var i = 0; i < i6055.length; i += 1) {
    i6054.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6055[i + 0]) );
  }
  i6052.bursts = i6054
  return i6052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6058 = root || new pc.ParticleSystemBurst()
  var i6059 = data
  i6058.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6059[0], i6058.count)
  i6058.cycleCount = i6059[1]
  i6058.minCount = i6059[2]
  i6058.maxCount = i6059[3]
  i6058.repeatInterval = i6059[4]
  i6058.time = i6059[5]
  return i6058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6060 = root || new pc.ParticleSystemRotationBySpeed()
  var i6061 = data
  i6060.enabled = !!i6061[0]
  i6060.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6061[1], i6060.x)
  i6060.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6061[2], i6060.y)
  i6060.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6061[3], i6060.z)
  i6060.separateAxes = !!i6061[4]
  i6060.range = new pc.Vec2( i6061[5], i6061[6] )
  return i6060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6062 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6063 = data
  i6062.enabled = !!i6063[0]
  i6062.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6063[1], i6062.x)
  i6062.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6063[2], i6062.y)
  i6062.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6063[3], i6062.z)
  i6062.separateAxes = !!i6063[4]
  return i6062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6064 = root || new pc.ParticleSystemShape()
  var i6065 = data
  i6064.enabled = !!i6065[0]
  i6064.shapeType = i6065[1]
  i6064.randomDirectionAmount = i6065[2]
  i6064.sphericalDirectionAmount = i6065[3]
  i6064.randomPositionAmount = i6065[4]
  i6064.alignToDirection = !!i6065[5]
  i6064.radius = i6065[6]
  i6064.radiusMode = i6065[7]
  i6064.radiusSpread = i6065[8]
  i6064.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6065[9], i6064.radiusSpeed)
  i6064.radiusThickness = i6065[10]
  i6064.angle = i6065[11]
  i6064.length = i6065[12]
  i6064.boxThickness = new pc.Vec3( i6065[13], i6065[14], i6065[15] )
  i6064.meshShapeType = i6065[16]
  request.r(i6065[17], i6065[18], 0, i6064, 'mesh')
  request.r(i6065[19], i6065[20], 0, i6064, 'meshRenderer')
  request.r(i6065[21], i6065[22], 0, i6064, 'skinnedMeshRenderer')
  i6064.useMeshMaterialIndex = !!i6065[23]
  i6064.meshMaterialIndex = i6065[24]
  i6064.useMeshColors = !!i6065[25]
  i6064.normalOffset = i6065[26]
  i6064.arc = i6065[27]
  i6064.arcMode = i6065[28]
  i6064.arcSpread = i6065[29]
  i6064.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6065[30], i6064.arcSpeed)
  i6064.donutRadius = i6065[31]
  i6064.position = new pc.Vec3( i6065[32], i6065[33], i6065[34] )
  i6064.rotation = new pc.Vec3( i6065[35], i6065[36], i6065[37] )
  i6064.scale = new pc.Vec3( i6065[38], i6065[39], i6065[40] )
  return i6064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6066 = root || new pc.ParticleSystemSizeBySpeed()
  var i6067 = data
  i6066.enabled = !!i6067[0]
  i6066.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6067[1], i6066.x)
  i6066.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6067[2], i6066.y)
  i6066.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6067[3], i6066.z)
  i6066.separateAxes = !!i6067[4]
  i6066.range = new pc.Vec2( i6067[5], i6067[6] )
  return i6066
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6068 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6069 = data
  i6068.enabled = !!i6069[0]
  i6068.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6069[1], i6068.x)
  i6068.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6069[2], i6068.y)
  i6068.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6069[3], i6068.z)
  i6068.separateAxes = !!i6069[4]
  return i6068
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6070 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6071 = data
  i6070.enabled = !!i6071[0]
  i6070.mode = i6071[1]
  i6070.animation = i6071[2]
  i6070.numTilesX = i6071[3]
  i6070.numTilesY = i6071[4]
  i6070.useRandomRow = !!i6071[5]
  i6070.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6071[6], i6070.frameOverTime)
  i6070.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6071[7], i6070.startFrame)
  i6070.cycleCount = i6071[8]
  i6070.rowIndex = i6071[9]
  i6070.flipU = i6071[10]
  i6070.flipV = i6071[11]
  i6070.spriteCount = i6071[12]
  var i6073 = i6071[13]
  var i6072 = []
  for(var i = 0; i < i6073.length; i += 2) {
  request.r(i6073[i + 0], i6073[i + 1], 2, i6072, '')
  }
  i6070.sprites = i6072
  return i6070
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6074 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6075 = data
  i6074.enabled = !!i6075[0]
  i6074.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6075[1], i6074.x)
  i6074.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6075[2], i6074.y)
  i6074.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6075[3], i6074.z)
  i6074.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6075[4], i6074.radial)
  i6074.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6075[5], i6074.speedModifier)
  i6074.space = i6075[6]
  i6074.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6075[7], i6074.orbitalX)
  i6074.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6075[8], i6074.orbitalY)
  i6074.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6075[9], i6074.orbitalZ)
  i6074.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6075[10], i6074.orbitalOffsetX)
  i6074.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6075[11], i6074.orbitalOffsetY)
  i6074.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6075[12], i6074.orbitalOffsetZ)
  return i6074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6076 = root || new pc.ParticleSystemNoise()
  var i6077 = data
  i6076.enabled = !!i6077[0]
  i6076.separateAxes = !!i6077[1]
  i6076.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6077[2], i6076.strengthX)
  i6076.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6077[3], i6076.strengthY)
  i6076.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6077[4], i6076.strengthZ)
  i6076.frequency = i6077[5]
  i6076.damping = !!i6077[6]
  i6076.octaveCount = i6077[7]
  i6076.octaveMultiplier = i6077[8]
  i6076.octaveScale = i6077[9]
  i6076.quality = i6077[10]
  i6076.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6077[11], i6076.scrollSpeed)
  i6076.scrollSpeedMultiplier = i6077[12]
  i6076.remapEnabled = !!i6077[13]
  i6076.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6077[14], i6076.remapX)
  i6076.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6077[15], i6076.remapY)
  i6076.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6077[16], i6076.remapZ)
  i6076.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6077[17], i6076.positionAmount)
  i6076.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6077[18], i6076.rotationAmount)
  i6076.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6077[19], i6076.sizeAmount)
  return i6076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6078 = root || new pc.ParticleSystemInheritVelocity()
  var i6079 = data
  i6078.enabled = !!i6079[0]
  i6078.mode = i6079[1]
  i6078.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6079[2], i6078.curve)
  return i6078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6080 = root || new pc.ParticleSystemForceOverLifetime()
  var i6081 = data
  i6080.enabled = !!i6081[0]
  i6080.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6081[1], i6080.x)
  i6080.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6081[2], i6080.y)
  i6080.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6081[3], i6080.z)
  i6080.space = i6081[4]
  i6080.randomized = !!i6081[5]
  return i6080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6082 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6083 = data
  i6082.enabled = !!i6083[0]
  i6082.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6083[1], i6082.limit)
  i6082.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6083[2], i6082.limitX)
  i6082.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6083[3], i6082.limitY)
  i6082.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6083[4], i6082.limitZ)
  i6082.dampen = i6083[5]
  i6082.separateAxes = !!i6083[6]
  i6082.space = i6083[7]
  i6082.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6083[8], i6082.drag)
  i6082.multiplyDragByParticleSize = !!i6083[9]
  i6082.multiplyDragByParticleVelocity = !!i6083[10]
  return i6082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6085 = data
  i6084.enabled = !!i6085[0]
  request.r(i6085[1], i6085[2], 0, i6084, 'sharedMaterial')
  var i6087 = i6085[3]
  var i6086 = []
  for(var i = 0; i < i6087.length; i += 2) {
  request.r(i6087[i + 0], i6087[i + 1], 2, i6086, '')
  }
  i6084.sharedMaterials = i6086
  i6084.receiveShadows = !!i6085[4]
  i6084.shadowCastingMode = i6085[5]
  i6084.sortingLayerID = i6085[6]
  i6084.sortingOrder = i6085[7]
  i6084.lightmapIndex = i6085[8]
  i6084.lightmapSceneIndex = i6085[9]
  i6084.lightmapScaleOffset = new pc.Vec4( i6085[10], i6085[11], i6085[12], i6085[13] )
  i6084.lightProbeUsage = i6085[14]
  i6084.reflectionProbeUsage = i6085[15]
  request.r(i6085[16], i6085[17], 0, i6084, 'mesh')
  i6084.meshCount = i6085[18]
  i6084.activeVertexStreamsCount = i6085[19]
  i6084.alignment = i6085[20]
  i6084.renderMode = i6085[21]
  i6084.sortMode = i6085[22]
  i6084.lengthScale = i6085[23]
  i6084.velocityScale = i6085[24]
  i6084.cameraVelocityScale = i6085[25]
  i6084.normalDirection = i6085[26]
  i6084.sortingFudge = i6085[27]
  i6084.minParticleSize = i6085[28]
  i6084.maxParticleSize = i6085[29]
  i6084.pivot = new pc.Vec3( i6085[30], i6085[31], i6085[32] )
  request.r(i6085[33], i6085[34], 0, i6084, 'trailMaterial')
  return i6084
}

Deserializers["Winner"] = function (request, data, root) {
  var i6088 = root || request.c( 'Winner' )
  var i6089 = data
  return i6088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6091 = data
  i6090.name = i6091[0]
  i6090.index = i6091[1]
  i6090.startup = !!i6091[2]
  return i6090
}

Deserializers["GameManager"] = function (request, data, root) {
  var i6092 = root || request.c( 'GameManager' )
  var i6093 = data
  request.r(i6093[0], i6093[1], 0, i6092, 'player')
  request.r(i6093[2], i6093[3], 0, i6092, 'endCardTitle')
  request.r(i6093[4], i6093[5], 0, i6092, 'endDescription')
  request.r(i6093[6], i6093[7], 0, i6092, 'endInstall')
  request.r(i6093[8], i6093[9], 0, i6092, 'score')
  request.r(i6093[10], i6093[11], 0, i6092, 'Intro')
  request.r(i6093[12], i6093[13], 0, i6092, 'retry')
  request.r(i6093[14], i6093[15], 0, i6092, 'Target')
  request.r(i6093[16], i6093[17], 0, i6092, 'endCard')
  request.r(i6093[18], i6093[19], 0, i6092, 'introText')
  request.r(i6093[20], i6093[21], 0, i6092, 'Hand')
  request.r(i6093[22], i6093[23], 0, i6092, 'targetObj')
  request.r(i6093[24], i6093[25], 0, i6092, 'retryBtn')
  i6092.title = i6093[26]
  i6092.description = i6093[27]
  i6092.installText = i6093[28]
  i6092.retryText = i6093[29]
  i6092.IntroText = i6093[30]
  i6092.targetText = i6093[31]
  i6092.textColours = new pc.Color(i6093[32], i6093[33], i6093[34], i6093[35])
  i6092.type = i6093[36]
  request.r(i6093[37], i6093[38], 0, i6092, 'iconTex')
  i6092.maxCount = i6093[39]
  request.r(i6093[40], i6093[41], 0, i6092, 'iconIMG')
  return i6092
}

Deserializers["PauseManager"] = function (request, data, root) {
  var i6094 = root || request.c( 'PauseManager' )
  var i6095 = data
  return i6094
}

Deserializers["LevelGenerator"] = function (request, data, root) {
  var i6096 = root || request.c( 'LevelGenerator' )
  var i6097 = data
  request.r(i6097[0], i6097[1], 0, i6096, 'platform')
  request.r(i6097[2], i6097[3], 0, i6096, 'mushroom')
  i6096.spawnHeight = i6097[4]
  i6096.division = i6097[5]
  i6096.numberOfPlatform = i6097[6]
  i6096.levelWidth = i6097[7]
  i6096.minY = i6097[8]
  i6096.maxY = i6097[9]
  return i6096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6099 = data
  i6098.enabled = !!i6099[0]
  i6098.aspect = i6099[1]
  i6098.orthographic = !!i6099[2]
  i6098.orthographicSize = i6099[3]
  i6098.backgroundColor = new pc.Color(i6099[4], i6099[5], i6099[6], i6099[7])
  i6098.nearClipPlane = i6099[8]
  i6098.farClipPlane = i6099[9]
  i6098.fieldOfView = i6099[10]
  i6098.depth = i6099[11]
  i6098.clearFlags = i6099[12]
  i6098.cullingMask = i6099[13]
  i6098.rect = i6099[14]
  request.r(i6099[15], i6099[16], 0, i6098, 'targetTexture')
  i6098.usePhysicalProperties = !!i6099[17]
  i6098.focalLength = i6099[18]
  i6098.sensorSize = new pc.Vec2( i6099[19], i6099[20] )
  i6098.lensShift = new pc.Vec2( i6099[21], i6099[22] )
  i6098.gateFit = i6099[23]
  i6098.commandBufferCount = i6099[24]
  i6098.cameraType = i6099[25]
  return i6098
}

Deserializers["CamraFollow"] = function (request, data, root) {
  var i6100 = root || request.c( 'CamraFollow' )
  var i6101 = data
  request.r(i6101[0], i6101[1], 0, i6100, 'target')
  i6100.smoothSpeed = i6101[2]
  return i6100
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i6102 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i6103 = data
  i6102.m_RenderShadows = !!i6103[0]
  i6102.m_RequiresDepthTextureOption = i6103[1]
  i6102.m_RequiresOpaqueTextureOption = i6103[2]
  i6102.m_CameraType = i6103[3]
  var i6105 = i6103[4]
  var i6104 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i6105.length; i += 2) {
  request.r(i6105[i + 0], i6105[i + 1], 1, i6104, '')
  }
  i6102.m_Cameras = i6104
  i6102.m_RendererIndex = i6103[5]
  i6102.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i6103[6] )
  request.r(i6103[7], i6103[8], 0, i6102, 'm_VolumeTrigger')
  i6102.m_VolumeFrameworkUpdateModeOption = i6103[9]
  i6102.m_RenderPostProcessing = !!i6103[10]
  i6102.m_Antialiasing = i6103[11]
  i6102.m_AntialiasingQuality = i6103[12]
  i6102.m_StopNaN = !!i6103[13]
  i6102.m_Dithering = !!i6103[14]
  i6102.m_ClearDepth = !!i6103[15]
  i6102.m_AllowXRRendering = !!i6103[16]
  i6102.m_AllowHDROutput = !!i6103[17]
  i6102.m_UseScreenCoordOverride = !!i6103[18]
  i6102.m_ScreenSizeOverride = new pc.Vec4( i6103[19], i6103[20], i6103[21], i6103[22] )
  i6102.m_ScreenCoordScaleBias = new pc.Vec4( i6103[23], i6103[24], i6103[25], i6103[26] )
  i6102.m_RequiresDepthTexture = !!i6103[27]
  i6102.m_RequiresColorTexture = !!i6103[28]
  i6102.m_Version = i6103[29]
  i6102.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i6103[30], i6102.m_TaaSettings)
  return i6102
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i6108 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i6109 = data
  i6108.m_Quality = i6109[0]
  i6108.m_FrameInfluence = i6109[1]
  i6108.m_JitterScale = i6109[2]
  i6108.m_MipBias = i6109[3]
  i6108.m_VarianceClampScale = i6109[4]
  i6108.m_ContrastAdaptiveSharpening = i6109[5]
  return i6108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6111 = data
  i6110.enabled = !!i6111[0]
  i6110.planeDistance = i6111[1]
  i6110.referencePixelsPerUnit = i6111[2]
  i6110.isFallbackOverlay = !!i6111[3]
  i6110.renderMode = i6111[4]
  i6110.renderOrder = i6111[5]
  i6110.sortingLayerName = i6111[6]
  i6110.sortingOrder = i6111[7]
  i6110.scaleFactor = i6111[8]
  request.r(i6111[9], i6111[10], 0, i6110, 'worldCamera')
  i6110.overrideSorting = !!i6111[11]
  i6110.pixelPerfect = !!i6111[12]
  i6110.targetDisplay = i6111[13]
  i6110.overridePixelPerfect = !!i6111[14]
  return i6110
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6112 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6113 = data
  i6112.m_UiScaleMode = i6113[0]
  i6112.m_ReferencePixelsPerUnit = i6113[1]
  i6112.m_ScaleFactor = i6113[2]
  i6112.m_ReferenceResolution = new pc.Vec2( i6113[3], i6113[4] )
  i6112.m_ScreenMatchMode = i6113[5]
  i6112.m_MatchWidthOrHeight = i6113[6]
  i6112.m_PhysicalUnit = i6113[7]
  i6112.m_FallbackScreenDPI = i6113[8]
  i6112.m_DefaultSpriteDPI = i6113[9]
  i6112.m_DynamicPixelsPerUnit = i6113[10]
  i6112.m_PresetInfoIsWorld = !!i6113[11]
  return i6112
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6114 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6115 = data
  i6114.m_IgnoreReversedGraphics = !!i6115[0]
  i6114.m_BlockingObjects = i6115[1]
  i6114.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6115[2] )
  return i6114
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i6116 = root || request.c( 'UnityEngine.UI.Text' )
  var i6117 = data
  i6116.m_FontData = request.d('UnityEngine.UI.FontData', i6117[0], i6116.m_FontData)
  i6116.m_Text = i6117[1]
  request.r(i6117[2], i6117[3], 0, i6116, 'm_Material')
  i6116.m_Maskable = !!i6117[4]
  i6116.m_Color = new pc.Color(i6117[5], i6117[6], i6117[7], i6117[8])
  i6116.m_RaycastTarget = !!i6117[9]
  i6116.m_RaycastPadding = new pc.Vec4( i6117[10], i6117[11], i6117[12], i6117[13] )
  return i6116
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i6118 = root || request.c( 'UnityEngine.UI.FontData' )
  var i6119 = data
  request.r(i6119[0], i6119[1], 0, i6118, 'm_Font')
  i6118.m_FontSize = i6119[2]
  i6118.m_FontStyle = i6119[3]
  i6118.m_BestFit = !!i6119[4]
  i6118.m_MinSize = i6119[5]
  i6118.m_MaxSize = i6119[6]
  i6118.m_Alignment = i6119[7]
  i6118.m_AlignByGeometry = !!i6119[8]
  i6118.m_RichText = !!i6119[9]
  i6118.m_HorizontalOverflow = i6119[10]
  i6118.m_VerticalOverflow = i6119[11]
  i6118.m_LineSpacing = i6119[12]
  return i6118
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6120 = root || request.c( 'UnityEngine.UI.Button' )
  var i6121 = data
  i6120.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6121[0], i6120.m_OnClick)
  i6120.m_Navigation = request.d('UnityEngine.UI.Navigation', i6121[1], i6120.m_Navigation)
  i6120.m_Transition = i6121[2]
  i6120.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6121[3], i6120.m_Colors)
  i6120.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6121[4], i6120.m_SpriteState)
  i6120.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6121[5], i6120.m_AnimationTriggers)
  i6120.m_Interactable = !!i6121[6]
  request.r(i6121[7], i6121[8], 0, i6120, 'm_TargetGraphic')
  return i6120
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6122 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6123 = data
  i6122.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6123[0], i6122.m_PersistentCalls)
  return i6122
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6124 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6125 = data
  var i6127 = i6125[0]
  var i6126 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6127.length; i += 1) {
    i6126.add(request.d('UnityEngine.Events.PersistentCall', i6127[i + 0]));
  }
  i6124.m_Calls = i6126
  return i6124
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6130 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6131 = data
  request.r(i6131[0], i6131[1], 0, i6130, 'm_Target')
  i6130.m_TargetAssemblyTypeName = i6131[2]
  i6130.m_MethodName = i6131[3]
  i6130.m_Mode = i6131[4]
  i6130.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6131[5], i6130.m_Arguments)
  i6130.m_CallState = i6131[6]
  return i6130
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6132 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6133 = data
  request.r(i6133[0], i6133[1], 0, i6132, 'm_ObjectArgument')
  i6132.m_ObjectArgumentAssemblyTypeName = i6133[2]
  i6132.m_IntArgument = i6133[3]
  i6132.m_FloatArgument = i6133[4]
  i6132.m_StringArgument = i6133[5]
  i6132.m_BoolArgument = !!i6133[6]
  return i6132
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6134 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6135 = data
  i6134.m_Mode = i6135[0]
  i6134.m_WrapAround = !!i6135[1]
  request.r(i6135[2], i6135[3], 0, i6134, 'm_SelectOnUp')
  request.r(i6135[4], i6135[5], 0, i6134, 'm_SelectOnDown')
  request.r(i6135[6], i6135[7], 0, i6134, 'm_SelectOnLeft')
  request.r(i6135[8], i6135[9], 0, i6134, 'm_SelectOnRight')
  return i6134
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6136 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6137 = data
  i6136.m_NormalColor = new pc.Color(i6137[0], i6137[1], i6137[2], i6137[3])
  i6136.m_HighlightedColor = new pc.Color(i6137[4], i6137[5], i6137[6], i6137[7])
  i6136.m_PressedColor = new pc.Color(i6137[8], i6137[9], i6137[10], i6137[11])
  i6136.m_SelectedColor = new pc.Color(i6137[12], i6137[13], i6137[14], i6137[15])
  i6136.m_DisabledColor = new pc.Color(i6137[16], i6137[17], i6137[18], i6137[19])
  i6136.m_ColorMultiplier = i6137[20]
  i6136.m_FadeDuration = i6137[21]
  return i6136
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6138 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6139 = data
  request.r(i6139[0], i6139[1], 0, i6138, 'm_HighlightedSprite')
  request.r(i6139[2], i6139[3], 0, i6138, 'm_PressedSprite')
  request.r(i6139[4], i6139[5], 0, i6138, 'm_SelectedSprite')
  request.r(i6139[6], i6139[7], 0, i6138, 'm_DisabledSprite')
  return i6138
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6140 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6141 = data
  i6140.m_NormalTrigger = i6141[0]
  i6140.m_HighlightedTrigger = i6141[1]
  i6140.m_PressedTrigger = i6141[2]
  i6140.m_SelectedTrigger = i6141[3]
  i6140.m_DisabledTrigger = i6141[4]
  return i6140
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6142 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6143 = data
  request.r(i6143[0], i6143[1], 0, i6142, 'm_FirstSelected')
  i6142.m_sendNavigationEvents = !!i6143[2]
  i6142.m_DragThreshold = i6143[3]
  return i6142
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6144 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6145 = data
  i6144.m_HorizontalAxis = i6145[0]
  i6144.m_VerticalAxis = i6145[1]
  i6144.m_SubmitButton = i6145[2]
  i6144.m_CancelButton = i6145[3]
  i6144.m_InputActionsPerSecond = i6145[4]
  i6144.m_RepeatDelay = i6145[5]
  i6144.m_ForceModuleActive = !!i6145[6]
  i6144.m_SendPointerHoverToParent = !!i6145[7]
  return i6144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6147 = data
  i6146.ambientIntensity = i6147[0]
  i6146.reflectionIntensity = i6147[1]
  i6146.ambientMode = i6147[2]
  i6146.ambientLight = new pc.Color(i6147[3], i6147[4], i6147[5], i6147[6])
  i6146.ambientSkyColor = new pc.Color(i6147[7], i6147[8], i6147[9], i6147[10])
  i6146.ambientGroundColor = new pc.Color(i6147[11], i6147[12], i6147[13], i6147[14])
  i6146.ambientEquatorColor = new pc.Color(i6147[15], i6147[16], i6147[17], i6147[18])
  i6146.fogColor = new pc.Color(i6147[19], i6147[20], i6147[21], i6147[22])
  i6146.fogEndDistance = i6147[23]
  i6146.fogStartDistance = i6147[24]
  i6146.fogDensity = i6147[25]
  i6146.fog = !!i6147[26]
  request.r(i6147[27], i6147[28], 0, i6146, 'skybox')
  i6146.fogMode = i6147[29]
  var i6149 = i6147[30]
  var i6148 = []
  for(var i = 0; i < i6149.length; i += 1) {
    i6148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6149[i + 0]) );
  }
  i6146.lightmaps = i6148
  i6146.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6147[31], i6146.lightProbes)
  i6146.lightmapsMode = i6147[32]
  i6146.mixedBakeMode = i6147[33]
  i6146.environmentLightingMode = i6147[34]
  i6146.ambientProbe = new pc.SphericalHarmonicsL2(i6147[35])
  i6146.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i6147[36])
  i6146.useReferenceAmbientProbe = !!i6147[37]
  request.r(i6147[38], i6147[39], 0, i6146, 'customReflection')
  request.r(i6147[40], i6147[41], 0, i6146, 'defaultReflection')
  i6146.defaultReflectionMode = i6147[42]
  i6146.defaultReflectionResolution = i6147[43]
  i6146.sunLightObjectId = i6147[44]
  i6146.pixelLightCount = i6147[45]
  i6146.defaultReflectionHDR = !!i6147[46]
  i6146.hasLightDataAsset = !!i6147[47]
  i6146.hasManualGenerate = !!i6147[48]
  return i6146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6153 = data
  request.r(i6153[0], i6153[1], 0, i6152, 'lightmapColor')
  request.r(i6153[2], i6153[3], 0, i6152, 'lightmapDirection')
  return i6152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6154 = root || new UnityEngine.LightProbes()
  var i6155 = data
  return i6154
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i6162 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i6163 = data
  request.r(i6163[0], i6163[1], 0, i6162, 'panelPrefab')
  var i6165 = i6163[2]
  var i6164 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i6165.length; i += 1) {
    i6164.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i6165[i + 0]));
  }
  i6162.prefabs = i6164
  return i6162
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i6168 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i6169 = data
  i6168.type = i6169[0]
  request.r(i6169[1], i6169[2], 0, i6168, 'prefab')
  return i6168
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i6170 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i6171 = data
  i6170.m_Spacing = i6171[0]
  i6170.m_ChildForceExpandWidth = !!i6171[1]
  i6170.m_ChildForceExpandHeight = !!i6171[2]
  i6170.m_ChildControlWidth = !!i6171[3]
  i6170.m_ChildControlHeight = !!i6171[4]
  i6170.m_ChildScaleWidth = !!i6171[5]
  i6170.m_ChildScaleHeight = !!i6171[6]
  i6170.m_ReverseArrangement = !!i6171[7]
  i6170.m_Padding = UnityEngine.RectOffset.FromPaddings(i6171[8], i6171[9], i6171[10], i6171[11])
  i6170.m_ChildAlignment = i6171[12]
  return i6170
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i6172 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i6173 = data
  i6172.m_HorizontalFit = i6173[0]
  i6172.m_VerticalFit = i6173[1]
  return i6172
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i6174 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i6175 = data
  request.r(i6175[0], i6175[1], 0, i6174, 'contentHolder')
  return i6174
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i6176 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i6177 = data
  request.r(i6177[0], i6177[1], 0, i6176, 'nameLabel')
  request.r(i6177[2], i6177[3], 0, i6176, 'scrollRect')
  request.r(i6177[4], i6177[5], 0, i6176, 'viewport')
  request.r(i6177[6], i6177[7], 0, i6176, 'Canvas')
  return i6176
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i6178 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i6179 = data
  i6178.m_IgnoreLayout = !!i6179[0]
  i6178.m_MinWidth = i6179[1]
  i6178.m_MinHeight = i6179[2]
  i6178.m_PreferredWidth = i6179[3]
  i6178.m_PreferredHeight = i6179[4]
  i6178.m_FlexibleWidth = i6179[5]
  i6178.m_FlexibleHeight = i6179[6]
  i6178.m_LayoutPriority = i6179[7]
  return i6178
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i6180 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i6181 = data
  request.r(i6181[0], i6181[1], 0, i6180, 'm_Content')
  i6180.m_Horizontal = !!i6181[2]
  i6180.m_Vertical = !!i6181[3]
  i6180.m_MovementType = i6181[4]
  i6180.m_Elasticity = i6181[5]
  i6180.m_Inertia = !!i6181[6]
  i6180.m_DecelerationRate = i6181[7]
  i6180.m_ScrollSensitivity = i6181[8]
  request.r(i6181[9], i6181[10], 0, i6180, 'm_Viewport')
  request.r(i6181[11], i6181[12], 0, i6180, 'm_HorizontalScrollbar')
  request.r(i6181[13], i6181[14], 0, i6180, 'm_VerticalScrollbar')
  i6180.m_HorizontalScrollbarVisibility = i6181[15]
  i6180.m_VerticalScrollbarVisibility = i6181[16]
  i6180.m_HorizontalScrollbarSpacing = i6181[17]
  i6180.m_VerticalScrollbarSpacing = i6181[18]
  i6180.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i6181[19], i6180.m_OnValueChanged)
  return i6180
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i6182 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i6183 = data
  i6182.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6183[0], i6182.m_PersistentCalls)
  return i6182
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i6184 = root || request.c( 'UnityEngine.UI.Mask' )
  var i6185 = data
  i6184.m_ShowMaskGraphic = !!i6185[0]
  return i6184
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i6186 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i6187 = data
  request.r(i6187[0], i6187[1], 0, i6186, 'm_HandleRect')
  i6186.m_Direction = i6187[2]
  i6186.m_Value = i6187[3]
  i6186.m_Size = i6187[4]
  i6186.m_NumberOfSteps = i6187[5]
  i6186.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i6187[6], i6186.m_OnValueChanged)
  i6186.m_Navigation = request.d('UnityEngine.UI.Navigation', i6187[7], i6186.m_Navigation)
  i6186.m_Transition = i6187[8]
  i6186.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6187[9], i6186.m_Colors)
  i6186.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6187[10], i6186.m_SpriteState)
  i6186.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6187[11], i6186.m_AnimationTriggers)
  i6186.m_Interactable = !!i6187[12]
  request.r(i6187[13], i6187[14], 0, i6186, 'm_TargetGraphic')
  return i6186
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i6188 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i6189 = data
  i6188.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6189[0], i6188.m_PersistentCalls)
  return i6188
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i6190 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i6191 = data
  var i6193 = i6191[0]
  var i6192 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i6193.length; i += 1) {
    i6192.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i6193[i + 0]));
  }
  i6190.m_Delegates = i6192
  return i6190
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i6196 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i6197 = data
  i6196.eventID = i6197[0]
  i6196.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i6197[1], i6196.callback)
  return i6196
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i6198 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i6199 = data
  i6198.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6199[0], i6198.m_PersistentCalls)
  return i6198
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i6200 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i6201 = data
  request.r(i6201[0], i6201[1], 0, i6200, 'nameLabel')
  request.r(i6201[2], i6201[3], 0, i6200, 'valueLabel')
  i6200.colorDefault = new pc.Color(i6201[4], i6201[5], i6201[6], i6201[7])
  i6200.colorSelected = new pc.Color(i6201[8], i6201[9], i6201[10], i6201[11])
  return i6200
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i6202 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i6203 = data
  request.r(i6203[0], i6203[1], 0, i6202, 'nameLabel')
  request.r(i6203[2], i6203[3], 0, i6202, 'valueToggle')
  request.r(i6203[4], i6203[5], 0, i6202, 'checkmarkImage')
  i6202.colorDefault = new pc.Color(i6203[6], i6203[7], i6203[8], i6203[9])
  i6202.colorSelected = new pc.Color(i6203[10], i6203[11], i6203[12], i6203[13])
  return i6202
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i6204 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i6205 = data
  i6204.toggleTransition = i6205[0]
  request.r(i6205[1], i6205[2], 0, i6204, 'graphic')
  i6204.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i6205[3], i6204.onValueChanged)
  request.r(i6205[4], i6205[5], 0, i6204, 'm_Group')
  i6204.m_IsOn = !!i6205[6]
  i6204.m_Navigation = request.d('UnityEngine.UI.Navigation', i6205[7], i6204.m_Navigation)
  i6204.m_Transition = i6205[8]
  i6204.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6205[9], i6204.m_Colors)
  i6204.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6205[10], i6204.m_SpriteState)
  i6204.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6205[11], i6204.m_AnimationTriggers)
  i6204.m_Interactable = !!i6205[12]
  request.r(i6205[13], i6205[14], 0, i6204, 'm_TargetGraphic')
  return i6204
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i6206 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i6207 = data
  i6206.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6207[0], i6206.m_PersistentCalls)
  return i6206
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i6208 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i6209 = data
  request.r(i6209[0], i6209[1], 0, i6208, 'nameLabel')
  request.r(i6209[2], i6209[3], 0, i6208, 'valueLabel')
  i6208.colorDefault = new pc.Color(i6209[4], i6209[5], i6209[6], i6209[7])
  i6208.colorSelected = new pc.Color(i6209[8], i6209[9], i6209[10], i6209[11])
  return i6208
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i6210 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i6211 = data
  request.r(i6211[0], i6211[1], 0, i6210, 'nameLabel')
  request.r(i6211[2], i6211[3], 0, i6210, 'valueLabel')
  i6210.colorDefault = new pc.Color(i6211[4], i6211[5], i6211[6], i6211[7])
  i6210.colorSelected = new pc.Color(i6211[8], i6211[9], i6211[10], i6211[11])
  return i6210
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i6212 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i6213 = data
  request.r(i6213[0], i6213[1], 0, i6212, 'nameLabel')
  request.r(i6213[2], i6213[3], 0, i6212, 'valueLabel')
  i6212.colorDefault = new pc.Color(i6213[4], i6213[5], i6213[6], i6213[7])
  i6212.colorSelected = new pc.Color(i6213[8], i6213[9], i6213[10], i6213[11])
  return i6212
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i6214 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i6215 = data
  request.r(i6215[0], i6215[1], 0, i6214, 'nextButtonText')
  request.r(i6215[2], i6215[3], 0, i6214, 'previousButtonText')
  request.r(i6215[4], i6215[5], 0, i6214, 'nameLabel')
  request.r(i6215[6], i6215[7], 0, i6214, 'valueLabel')
  i6214.colorDefault = new pc.Color(i6215[8], i6215[9], i6215[10], i6215[11])
  i6214.colorSelected = new pc.Color(i6215[12], i6215[13], i6215[14], i6215[15])
  return i6214
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i6216 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i6217 = data
  request.r(i6217[0], i6217[1], 0, i6216, 'nameLabel')
  i6216.colorDefault = new pc.Color(i6217[2], i6217[3], i6217[4], i6217[5])
  i6216.colorSelected = new pc.Color(i6217[6], i6217[7], i6217[8], i6217[9])
  return i6216
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i6218 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i6219 = data
  request.r(i6219[0], i6219[1], 0, i6218, 'nameLabel')
  request.r(i6219[2], i6219[3], 0, i6218, 'valueToggle')
  i6218.colorDefault = new pc.Color(i6219[4], i6219[5], i6219[6], i6219[7])
  i6218.colorSelected = new pc.Color(i6219[8], i6219[9], i6219[10], i6219[11])
  return i6218
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i6220 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i6221 = data
  i6220.toggleTransition = i6221[0]
  request.r(i6221[1], i6221[2], 0, i6220, 'graphic')
  i6220.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i6221[3], i6220.onValueChanged)
  request.r(i6221[4], i6221[5], 0, i6220, 'content')
  request.r(i6221[6], i6221[7], 0, i6220, 'arrowOpened')
  request.r(i6221[8], i6221[9], 0, i6220, 'arrowClosed')
  request.r(i6221[10], i6221[11], 0, i6220, 'm_Group')
  i6220.m_IsOn = !!i6221[12]
  i6220.m_Navigation = request.d('UnityEngine.UI.Navigation', i6221[13], i6220.m_Navigation)
  i6220.m_Transition = i6221[14]
  i6220.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6221[15], i6220.m_Colors)
  i6220.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6221[16], i6220.m_SpriteState)
  i6220.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6221[17], i6220.m_AnimationTriggers)
  i6220.m_Interactable = !!i6221[18]
  request.r(i6221[19], i6221[20], 0, i6220, 'm_TargetGraphic')
  return i6220
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i6222 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i6223 = data
  request.r(i6223[0], i6223[1], 0, i6222, 'nameLabel')
  request.r(i6223[2], i6223[3], 0, i6222, 'valueToggle')
  request.r(i6223[4], i6223[5], 0, i6222, 'colorImage')
  request.r(i6223[6], i6223[7], 0, i6222, 'fieldR')
  request.r(i6223[8], i6223[9], 0, i6222, 'fieldG')
  request.r(i6223[10], i6223[11], 0, i6222, 'fieldB')
  request.r(i6223[12], i6223[13], 0, i6222, 'fieldA')
  i6222.colorDefault = new pc.Color(i6223[14], i6223[15], i6223[16], i6223[17])
  i6222.colorSelected = new pc.Color(i6223[18], i6223[19], i6223[20], i6223[21])
  return i6222
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i6224 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i6225 = data
  request.r(i6225[0], i6225[1], 0, i6224, 'nameLabel')
  request.r(i6225[2], i6225[3], 0, i6224, 'valueLabel')
  i6224.colorDefault = new pc.Color(i6225[4], i6225[5], i6225[6], i6225[7])
  i6224.colorSelected = new pc.Color(i6225[8], i6225[9], i6225[10], i6225[11])
  return i6224
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i6226 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i6227 = data
  request.r(i6227[0], i6227[1], 0, i6226, 'nameLabel')
  request.r(i6227[2], i6227[3], 0, i6226, 'valueToggle')
  request.r(i6227[4], i6227[5], 0, i6226, 'fieldX')
  request.r(i6227[6], i6227[7], 0, i6226, 'fieldY')
  i6226.colorDefault = new pc.Color(i6227[8], i6227[9], i6227[10], i6227[11])
  i6226.colorSelected = new pc.Color(i6227[12], i6227[13], i6227[14], i6227[15])
  return i6226
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i6228 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i6229 = data
  request.r(i6229[0], i6229[1], 0, i6228, 'nameLabel')
  request.r(i6229[2], i6229[3], 0, i6228, 'valueToggle')
  request.r(i6229[4], i6229[5], 0, i6228, 'fieldX')
  request.r(i6229[6], i6229[7], 0, i6228, 'fieldY')
  request.r(i6229[8], i6229[9], 0, i6228, 'fieldZ')
  i6228.colorDefault = new pc.Color(i6229[10], i6229[11], i6229[12], i6229[13])
  i6228.colorSelected = new pc.Color(i6229[14], i6229[15], i6229[16], i6229[17])
  return i6228
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i6230 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i6231 = data
  request.r(i6231[0], i6231[1], 0, i6230, 'nameLabel')
  request.r(i6231[2], i6231[3], 0, i6230, 'valueToggle')
  request.r(i6231[4], i6231[5], 0, i6230, 'fieldX')
  request.r(i6231[6], i6231[7], 0, i6230, 'fieldY')
  request.r(i6231[8], i6231[9], 0, i6230, 'fieldZ')
  request.r(i6231[10], i6231[11], 0, i6230, 'fieldW')
  i6230.colorDefault = new pc.Color(i6231[12], i6231[13], i6231[14], i6231[15])
  i6230.colorSelected = new pc.Color(i6231[16], i6231[17], i6231[18], i6231[19])
  return i6230
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i6232 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i6233 = data
  i6232.colorDefault = new pc.Color(i6233[0], i6233[1], i6233[2], i6233[3])
  i6232.colorSelected = new pc.Color(i6233[4], i6233[5], i6233[6], i6233[7])
  return i6232
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i6234 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i6235 = data
  i6234.m_Spacing = i6235[0]
  i6234.m_ChildForceExpandWidth = !!i6235[1]
  i6234.m_ChildForceExpandHeight = !!i6235[2]
  i6234.m_ChildControlWidth = !!i6235[3]
  i6234.m_ChildControlHeight = !!i6235[4]
  i6234.m_ChildScaleWidth = !!i6235[5]
  i6234.m_ChildScaleHeight = !!i6235[6]
  i6234.m_ReverseArrangement = !!i6235[7]
  i6234.m_Padding = UnityEngine.RectOffset.FromPaddings(i6235[8], i6235[9], i6235[10], i6235[11])
  i6234.m_ChildAlignment = i6235[12]
  return i6234
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i6236 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i6237 = data
  i6236.colorDefault = new pc.Color(i6237[0], i6237[1], i6237[2], i6237[3])
  i6236.colorSelected = new pc.Color(i6237[4], i6237[5], i6237[6], i6237[7])
  return i6236
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i6238 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i6239 = data
  request.r(i6239[0], i6239[1], 0, i6238, 'nameLabel')
  request.r(i6239[2], i6239[3], 0, i6238, 'header')
  i6238.colorDefault = new pc.Color(i6239[4], i6239[5], i6239[6], i6239[7])
  i6238.colorSelected = new pc.Color(i6239[8], i6239[9], i6239[10], i6239[11])
  return i6238
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i6240 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i6241 = data
  request.r(i6241[0], i6241[1], 0, i6240, 'nameLabel')
  request.r(i6241[2], i6241[3], 0, i6240, 'valueToggle')
  var i6243 = i6241[4]
  var i6242 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i6243.length; i += 2) {
  request.r(i6243[i + 0], i6243[i + 1], 1, i6242, '')
  }
  i6240.toggles = i6242
  i6240.colorDefault = new pc.Color(i6241[5], i6241[6], i6241[7], i6241[8])
  i6240.colorSelected = new pc.Color(i6241[9], i6241[10], i6241[11], i6241[12])
  return i6240
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i6246 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i6247 = data
  request.r(i6247[0], i6247[1], 0, i6246, 'nameLabel')
  request.r(i6247[2], i6247[3], 0, i6246, 'valueToggle')
  request.r(i6247[4], i6247[5], 0, i6246, 'checkmarkImage')
  i6246.colorDefault = new pc.Color(i6247[6], i6247[7], i6247[8], i6247[9])
  i6246.colorSelected = new pc.Color(i6247[10], i6247[11], i6247[12], i6247[13])
  return i6246
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i6248 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i6249 = data
  request.r(i6249[0], i6249[1], 0, i6248, 'nameLabel')
  request.r(i6249[2], i6249[3], 0, i6248, 'valueToggle')
  request.r(i6249[4], i6249[5], 0, i6248, 'checkmarkImage')
  i6248.colorDefault = new pc.Color(i6249[6], i6249[7], i6249[8], i6249[9])
  i6248.colorSelected = new pc.Color(i6249[10], i6249[11], i6249[12], i6249[13])
  return i6248
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i6250 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i6251 = data
  request.r(i6251[0], i6251[1], 0, i6250, 'nextButtonText')
  request.r(i6251[2], i6251[3], 0, i6250, 'previousButtonText')
  request.r(i6251[4], i6251[5], 0, i6250, 'nameLabel')
  request.r(i6251[6], i6251[7], 0, i6250, 'valueLabel')
  i6250.colorDefault = new pc.Color(i6251[8], i6251[9], i6251[10], i6251[11])
  i6250.colorSelected = new pc.Color(i6251[12], i6251[13], i6251[14], i6251[15])
  return i6250
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i6252 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i6253 = data
  request.r(i6253[0], i6253[1], 0, i6252, 'nameLabel')
  request.r(i6253[2], i6253[3], 0, i6252, 'valueToggle')
  i6252.colorDefault = new pc.Color(i6253[4], i6253[5], i6253[6], i6253[7])
  i6252.colorSelected = new pc.Color(i6253[8], i6253[9], i6253[10], i6253[11])
  return i6252
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i6254 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i6255 = data
  request.r(i6255[0], i6255[1], 0, i6254, 'nameLabel')
  i6254.colorDefault = new pc.Color(i6255[2], i6255[3], i6255[4], i6255[5])
  i6254.colorSelected = new pc.Color(i6255[6], i6255[7], i6255[8], i6255[9])
  return i6254
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i6256 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i6257 = data
  request.r(i6257[0], i6257[1], 0, i6256, 'nameLabel')
  request.r(i6257[2], i6257[3], 0, i6256, 'valueLabel')
  request.r(i6257[4], i6257[5], 0, i6256, 'progressBarRect')
  i6256.colorDefault = new pc.Color(i6257[6], i6257[7], i6257[8], i6257[9])
  i6256.colorSelected = new pc.Color(i6257[10], i6257[11], i6257[12], i6257[13])
  return i6256
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i6258 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i6259 = data
  request.r(i6259[0], i6259[1], 0, i6258, 'nameLabel')
  request.r(i6259[2], i6259[3], 0, i6258, 'valueLabel')
  i6258.colorDefault = new pc.Color(i6259[4], i6259[5], i6259[6], i6259[7])
  i6258.colorSelected = new pc.Color(i6259[8], i6259[9], i6259[10], i6259[11])
  return i6258
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i6260 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i6261 = data
  request.r(i6261[0], i6261[1], 0, i6260, 'nameLabel')
  request.r(i6261[2], i6261[3], 0, i6260, 'valueLabel')
  i6260.colorDefault = new pc.Color(i6261[4], i6261[5], i6261[6], i6261[7])
  i6260.colorSelected = new pc.Color(i6261[8], i6261[9], i6261[10], i6261[11])
  return i6260
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i6262 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i6263 = data
  request.r(i6263[0], i6263[1], 0, i6262, 'nextButtonText')
  request.r(i6263[2], i6263[3], 0, i6262, 'previousButtonText')
  request.r(i6263[4], i6263[5], 0, i6262, 'nameLabel')
  request.r(i6263[6], i6263[7], 0, i6262, 'valueLabel')
  i6262.colorDefault = new pc.Color(i6263[8], i6263[9], i6263[10], i6263[11])
  i6262.colorSelected = new pc.Color(i6263[12], i6263[13], i6263[14], i6263[15])
  return i6262
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i6264 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i6265 = data
  request.r(i6265[0], i6265[1], 0, i6264, 'nextButtonText')
  request.r(i6265[2], i6265[3], 0, i6264, 'previousButtonText')
  request.r(i6265[4], i6265[5], 0, i6264, 'nameLabel')
  request.r(i6265[6], i6265[7], 0, i6264, 'valueLabel')
  i6264.colorDefault = new pc.Color(i6265[8], i6265[9], i6265[10], i6265[11])
  i6264.colorSelected = new pc.Color(i6265[12], i6265[13], i6265[14], i6265[15])
  return i6264
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i6266 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i6267 = data
  request.r(i6267[0], i6267[1], 0, i6266, 'panel')
  request.r(i6267[2], i6267[3], 0, i6266, 'valuePrefab')
  return i6266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i6268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i6269 = data
  i6268.AdditionalLightsPerObjectLimit = i6269[0]
  i6268.AdditionalLightsRenderingMode = i6269[1]
  i6268.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i6269[2], i6268.LightRenderingMode)
  i6268.ColorGradingLutSize = i6269[3]
  i6268.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i6269[4], i6268.ColorGradingMode)
  i6268.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i6269[5], i6268.MainLightRenderingMode)
  i6268.MainLightRenderingModeValue = i6269[6]
  i6268.SupportsMainLightShadows = !!i6269[7]
  i6268.MixedLightingSupported = !!i6269[8]
  i6268.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i6269[9], i6268.MsaaQuality)
  i6268.MSAA = i6269[10]
  i6268.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i6269[11], i6268.OpaqueDownsampling)
  i6268.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i6269[12], i6268.MainLightShadowmapResolution)
  i6268.MainLightShadowmapResolutionValue = i6269[13]
  i6268.SupportsSoftShadows = !!i6269[14]
  i6268.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i6269[15], i6268.SoftShadowQuality)
  i6268.SoftShadowQualityValue = i6269[16]
  i6268.ShadowDistance = i6269[17]
  i6268.ShadowCascadeCount = i6269[18]
  i6268.Cascade2Split = i6269[19]
  i6268.Cascade3Split = new pc.Vec2( i6269[20], i6269[21] )
  i6268.Cascade4Split = new pc.Vec3( i6269[22], i6269[23], i6269[24] )
  i6268.CascadeBorder = i6269[25]
  i6268.ShadowDepthBias = i6269[26]
  i6268.ShadowNormalBias = i6269[27]
  i6268.RenderScale = i6269[28]
  i6268.RequireDepthTexture = !!i6269[29]
  i6268.RequireOpaqueTexture = !!i6269[30]
  i6268.SupportsHDR = !!i6269[31]
  i6268.SupportsTerrainHoles = !!i6269[32]
  return i6268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i6270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i6271 = data
  i6270.Disabled = i6271[0]
  i6270.PerVertex = i6271[1]
  i6270.PerPixel = i6271[2]
  return i6270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i6272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i6273 = data
  i6272.LowDynamicRange = i6273[0]
  i6272.HighDynamicRange = i6273[1]
  return i6272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i6274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i6275 = data
  i6274.Disabled = i6275[0]
  i6274._2x = i6275[1]
  i6274._4x = i6275[2]
  i6274._8x = i6275[3]
  return i6274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i6276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i6277 = data
  i6276.None = i6277[0]
  i6276._2xBilinear = i6277[1]
  i6276._4xBox = i6277[2]
  i6276._4xBilinear = i6277[3]
  return i6276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i6278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i6279 = data
  i6278._256 = i6279[0]
  i6278._512 = i6279[1]
  i6278._1024 = i6279[2]
  i6278._2048 = i6279[3]
  i6278._4096 = i6279[4]
  return i6278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i6280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i6281 = data
  i6280.UsePipelineSettings = i6281[0]
  i6280.Low = i6281[1]
  i6280.Medium = i6281[2]
  i6280.High = i6281[3]
  return i6280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6283 = data
  var i6285 = i6283[0]
  var i6284 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6285.length; i += 1) {
    i6284.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6285[i + 0]));
  }
  i6282.ShaderCompilationErrors = i6284
  i6282.name = i6283[1]
  i6282.guid = i6283[2]
  var i6287 = i6283[3]
  var i6286 = []
  for(var i = 0; i < i6287.length; i += 1) {
    i6286.push( i6287[i + 0] );
  }
  i6282.shaderDefinedKeywords = i6286
  var i6289 = i6283[4]
  var i6288 = []
  for(var i = 0; i < i6289.length; i += 1) {
    i6288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6289[i + 0]) );
  }
  i6282.passes = i6288
  var i6291 = i6283[5]
  var i6290 = []
  for(var i = 0; i < i6291.length; i += 1) {
    i6290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6291[i + 0]) );
  }
  i6282.usePasses = i6290
  var i6293 = i6283[6]
  var i6292 = []
  for(var i = 0; i < i6293.length; i += 1) {
    i6292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6293[i + 0]) );
  }
  i6282.defaultParameterValues = i6292
  request.r(i6283[7], i6283[8], 0, i6282, 'unityFallbackShader')
  i6282.readDepth = !!i6283[9]
  i6282.isCreatedByShaderGraph = !!i6283[10]
  i6282.compiled = !!i6283[11]
  return i6282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6297 = data
  i6296.shaderName = i6297[0]
  i6296.errorMessage = i6297[1]
  return i6296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6302 = root || new pc.UnityShaderPass()
  var i6303 = data
  i6302.id = i6303[0]
  i6302.subShaderIndex = i6303[1]
  i6302.name = i6303[2]
  i6302.passType = i6303[3]
  i6302.grabPassTextureName = i6303[4]
  i6302.usePass = !!i6303[5]
  i6302.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6303[6], i6302.zTest)
  i6302.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6303[7], i6302.zWrite)
  i6302.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6303[8], i6302.culling)
  i6302.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6303[9], i6302.blending)
  i6302.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6303[10], i6302.alphaBlending)
  i6302.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6303[11], i6302.colorWriteMask)
  i6302.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6303[12], i6302.offsetUnits)
  i6302.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6303[13], i6302.offsetFactor)
  i6302.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6303[14], i6302.stencilRef)
  i6302.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6303[15], i6302.stencilReadMask)
  i6302.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6303[16], i6302.stencilWriteMask)
  i6302.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6303[17], i6302.stencilOp)
  i6302.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6303[18], i6302.stencilOpFront)
  i6302.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6303[19], i6302.stencilOpBack)
  var i6305 = i6303[20]
  var i6304 = []
  for(var i = 0; i < i6305.length; i += 1) {
    i6304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6305[i + 0]) );
  }
  i6302.tags = i6304
  var i6307 = i6303[21]
  var i6306 = []
  for(var i = 0; i < i6307.length; i += 1) {
    i6306.push( i6307[i + 0] );
  }
  i6302.passDefinedKeywords = i6306
  var i6309 = i6303[22]
  var i6308 = []
  for(var i = 0; i < i6309.length; i += 1) {
    i6308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6309[i + 0]) );
  }
  i6302.passDefinedKeywordGroups = i6308
  var i6311 = i6303[23]
  var i6310 = []
  for(var i = 0; i < i6311.length; i += 1) {
    i6310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6311[i + 0]) );
  }
  i6302.variants = i6310
  var i6313 = i6303[24]
  var i6312 = []
  for(var i = 0; i < i6313.length; i += 1) {
    i6312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6313[i + 0]) );
  }
  i6302.excludedVariants = i6312
  i6302.hasDepthReader = !!i6303[25]
  return i6302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6315 = data
  i6314.val = i6315[0]
  i6314.name = i6315[1]
  return i6314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6317 = data
  i6316.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6317[0], i6316.src)
  i6316.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6317[1], i6316.dst)
  i6316.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6317[2], i6316.op)
  return i6316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6319 = data
  i6318.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6319[0], i6318.pass)
  i6318.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6319[1], i6318.fail)
  i6318.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6319[2], i6318.zFail)
  i6318.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6319[3], i6318.comp)
  return i6318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6323 = data
  i6322.name = i6323[0]
  i6322.value = i6323[1]
  return i6322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6327 = data
  var i6329 = i6327[0]
  var i6328 = []
  for(var i = 0; i < i6329.length; i += 1) {
    i6328.push( i6329[i + 0] );
  }
  i6326.keywords = i6328
  i6326.hasDiscard = !!i6327[1]
  return i6326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6333 = data
  i6332.passId = i6333[0]
  i6332.subShaderIndex = i6333[1]
  var i6335 = i6333[2]
  var i6334 = []
  for(var i = 0; i < i6335.length; i += 1) {
    i6334.push( i6335[i + 0] );
  }
  i6332.keywords = i6334
  i6332.vertexProgram = i6333[3]
  i6332.fragmentProgram = i6333[4]
  i6332.exportedForWebGl2 = !!i6333[5]
  i6332.readDepth = !!i6333[6]
  return i6332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6339 = data
  request.r(i6339[0], i6339[1], 0, i6338, 'shader')
  i6338.pass = i6339[2]
  return i6338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6343 = data
  i6342.name = i6343[0]
  i6342.type = i6343[1]
  i6342.value = new pc.Vec4( i6343[2], i6343[3], i6343[4], i6343[5] )
  i6342.textureValue = i6343[6]
  i6342.shaderPropertyFlag = i6343[7]
  return i6342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6345 = data
  i6344.name = i6345[0]
  request.r(i6345[1], i6345[2], 0, i6344, 'texture')
  i6344.aabb = i6345[3]
  i6344.vertices = i6345[4]
  i6344.triangles = i6345[5]
  i6344.textureRect = UnityEngine.Rect.MinMaxRect(i6345[6], i6345[7], i6345[8], i6345[9])
  i6344.packedRect = UnityEngine.Rect.MinMaxRect(i6345[10], i6345[11], i6345[12], i6345[13])
  i6344.border = new pc.Vec4( i6345[14], i6345[15], i6345[16], i6345[17] )
  i6344.transparency = i6345[18]
  i6344.bounds = i6345[19]
  i6344.pixelsPerUnit = i6345[20]
  i6344.textureWidth = i6345[21]
  i6344.textureHeight = i6345[22]
  i6344.nativeSize = new pc.Vec2( i6345[23], i6345[24] )
  i6344.pivot = new pc.Vec2( i6345[25], i6345[26] )
  i6344.textureRectOffset = new pc.Vec2( i6345[27], i6345[28] )
  return i6344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6347 = data
  i6346.name = i6347[0]
  i6346.wrapMode = i6347[1]
  i6346.isLooping = !!i6347[2]
  i6346.length = i6347[3]
  var i6349 = i6347[4]
  var i6348 = []
  for(var i = 0; i < i6349.length; i += 1) {
    i6348.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6349[i + 0]) );
  }
  i6346.curves = i6348
  var i6351 = i6347[5]
  var i6350 = []
  for(var i = 0; i < i6351.length; i += 1) {
    i6350.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6351[i + 0]) );
  }
  i6346.events = i6350
  i6346.halfPrecision = !!i6347[6]
  i6346._frameRate = i6347[7]
  i6346.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i6347[8], i6346.localBounds)
  i6346.hasMuscleCurves = !!i6347[9]
  var i6353 = i6347[10]
  var i6352 = []
  for(var i = 0; i < i6353.length; i += 1) {
    i6352.push( i6353[i + 0] );
  }
  i6346.clipMuscleConstant = i6352
  i6346.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i6347[11], i6346.clipBindingConstant)
  return i6346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6357 = data
  i6356.path = i6357[0]
  i6356.hash = i6357[1]
  i6356.componentType = i6357[2]
  i6356.property = i6357[3]
  i6356.keys = i6357[4]
  var i6359 = i6357[5]
  var i6358 = []
  for(var i = 0; i < i6359.length; i += 1) {
    i6358.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6359[i + 0]) );
  }
  i6356.objectReferenceKeys = i6358
  return i6356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6363 = data
  i6362.time = i6363[0]
  request.r(i6363[1], i6363[2], 0, i6362, 'value')
  return i6362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6367 = data
  i6366.functionName = i6367[0]
  i6366.floatParameter = i6367[1]
  i6366.intParameter = i6367[2]
  i6366.stringParameter = i6367[3]
  request.r(i6367[4], i6367[5], 0, i6366, 'objectReferenceParameter')
  i6366.time = i6367[6]
  return i6366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i6368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i6369 = data
  i6368.center = new pc.Vec3( i6369[0], i6369[1], i6369[2] )
  i6368.extends = new pc.Vec3( i6369[3], i6369[4], i6369[5] )
  return i6368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i6372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i6373 = data
  var i6375 = i6373[0]
  var i6374 = []
  for(var i = 0; i < i6375.length; i += 1) {
    i6374.push( i6375[i + 0] );
  }
  i6372.genericBindings = i6374
  var i6377 = i6373[1]
  var i6376 = []
  for(var i = 0; i < i6377.length; i += 1) {
    i6376.push( i6377[i + 0] );
  }
  i6372.pptrCurveMapping = i6376
  return i6372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i6378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i6379 = data
  i6378.name = i6379[0]
  i6378.ascent = i6379[1]
  i6378.originalLineHeight = i6379[2]
  i6378.fontSize = i6379[3]
  var i6381 = i6379[4]
  var i6380 = []
  for(var i = 0; i < i6381.length; i += 1) {
    i6380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i6381[i + 0]) );
  }
  i6378.characterInfo = i6380
  request.r(i6379[5], i6379[6], 0, i6378, 'texture')
  i6378.originalFontSize = i6379[7]
  return i6378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i6384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i6385 = data
  i6384.index = i6385[0]
  i6384.advance = i6385[1]
  i6384.bearing = i6385[2]
  i6384.glyphWidth = i6385[3]
  i6384.glyphHeight = i6385[4]
  i6384.minX = i6385[5]
  i6384.maxX = i6385[6]
  i6384.minY = i6385[7]
  i6384.maxY = i6385[8]
  i6384.uvBottomLeftX = i6385[9]
  i6384.uvBottomLeftY = i6385[10]
  i6384.uvBottomRightX = i6385[11]
  i6384.uvBottomRightY = i6385[12]
  i6384.uvTopLeftX = i6385[13]
  i6384.uvTopLeftY = i6385[14]
  i6384.uvTopRightX = i6385[15]
  i6384.uvTopRightY = i6385[16]
  return i6384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6387 = data
  i6386.name = i6387[0]
  var i6389 = i6387[1]
  var i6388 = []
  for(var i = 0; i < i6389.length; i += 1) {
    i6388.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6389[i + 0]) );
  }
  i6386.layers = i6388
  var i6391 = i6387[2]
  var i6390 = []
  for(var i = 0; i < i6391.length; i += 1) {
    i6390.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6391[i + 0]) );
  }
  i6386.parameters = i6390
  i6386.animationClips = i6387[3]
  i6386.avatarUnsupported = i6387[4]
  return i6386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6395 = data
  i6394.name = i6395[0]
  i6394.defaultWeight = i6395[1]
  i6394.blendingMode = i6395[2]
  i6394.avatarMask = i6395[3]
  i6394.syncedLayerIndex = i6395[4]
  i6394.syncedLayerAffectsTiming = !!i6395[5]
  i6394.syncedLayers = i6395[6]
  i6394.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6395[7], i6394.stateMachine)
  return i6394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6397 = data
  i6396.id = i6397[0]
  i6396.name = i6397[1]
  i6396.path = i6397[2]
  var i6399 = i6397[3]
  var i6398 = []
  for(var i = 0; i < i6399.length; i += 1) {
    i6398.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6399[i + 0]) );
  }
  i6396.states = i6398
  var i6401 = i6397[4]
  var i6400 = []
  for(var i = 0; i < i6401.length; i += 1) {
    i6400.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6401[i + 0]) );
  }
  i6396.machines = i6400
  var i6403 = i6397[5]
  var i6402 = []
  for(var i = 0; i < i6403.length; i += 1) {
    i6402.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6403[i + 0]) );
  }
  i6396.entryStateTransitions = i6402
  var i6405 = i6397[6]
  var i6404 = []
  for(var i = 0; i < i6405.length; i += 1) {
    i6404.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6405[i + 0]) );
  }
  i6396.exitStateTransitions = i6404
  var i6407 = i6397[7]
  var i6406 = []
  for(var i = 0; i < i6407.length; i += 1) {
    i6406.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6407[i + 0]) );
  }
  i6396.anyStateTransitions = i6406
  i6396.defaultStateId = i6397[8]
  return i6396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6411 = data
  i6410.id = i6411[0]
  i6410.name = i6411[1]
  i6410.cycleOffset = i6411[2]
  i6410.cycleOffsetParameter = i6411[3]
  i6410.cycleOffsetParameterActive = !!i6411[4]
  i6410.mirror = !!i6411[5]
  i6410.mirrorParameter = i6411[6]
  i6410.mirrorParameterActive = !!i6411[7]
  i6410.motionId = i6411[8]
  i6410.nameHash = i6411[9]
  i6410.fullPathHash = i6411[10]
  i6410.speed = i6411[11]
  i6410.speedParameter = i6411[12]
  i6410.speedParameterActive = !!i6411[13]
  i6410.tag = i6411[14]
  i6410.tagHash = i6411[15]
  i6410.writeDefaultValues = !!i6411[16]
  var i6413 = i6411[17]
  var i6412 = []
  for(var i = 0; i < i6413.length; i += 2) {
  request.r(i6413[i + 0], i6413[i + 1], 2, i6412, '')
  }
  i6410.behaviours = i6412
  var i6415 = i6411[18]
  var i6414 = []
  for(var i = 0; i < i6415.length; i += 1) {
    i6414.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6415[i + 0]) );
  }
  i6410.transitions = i6414
  return i6410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6421 = data
  i6420.fullPath = i6421[0]
  i6420.canTransitionToSelf = !!i6421[1]
  i6420.duration = i6421[2]
  i6420.exitTime = i6421[3]
  i6420.hasExitTime = !!i6421[4]
  i6420.hasFixedDuration = !!i6421[5]
  i6420.interruptionSource = i6421[6]
  i6420.offset = i6421[7]
  i6420.orderedInterruption = !!i6421[8]
  i6420.destinationStateId = i6421[9]
  i6420.isExit = !!i6421[10]
  i6420.mute = !!i6421[11]
  i6420.solo = !!i6421[12]
  var i6423 = i6421[13]
  var i6422 = []
  for(var i = 0; i < i6423.length; i += 1) {
    i6422.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6423[i + 0]) );
  }
  i6420.conditions = i6422
  return i6420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6429 = data
  i6428.destinationStateId = i6429[0]
  i6428.isExit = !!i6429[1]
  i6428.mute = !!i6429[2]
  i6428.solo = !!i6429[3]
  var i6431 = i6429[4]
  var i6430 = []
  for(var i = 0; i < i6431.length; i += 1) {
    i6430.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6431[i + 0]) );
  }
  i6428.conditions = i6430
  return i6428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6435 = data
  i6434.defaultBool = !!i6435[0]
  i6434.defaultFloat = i6435[1]
  i6434.defaultInt = i6435[2]
  i6434.name = i6435[3]
  i6434.nameHash = i6435[4]
  i6434.type = i6435[5]
  return i6434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6437 = data
  i6436.name = i6437[0]
  i6436.bytes64 = i6437[1]
  i6436.data = i6437[2]
  return i6436
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i6438 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i6439 = data
  i6438.useSafeMode = !!i6439[0]
  i6438.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i6439[1], i6438.safeModeOptions)
  i6438.timeScale = i6439[2]
  i6438.unscaledTimeScale = i6439[3]
  i6438.useSmoothDeltaTime = !!i6439[4]
  i6438.maxSmoothUnscaledTime = i6439[5]
  i6438.rewindCallbackMode = i6439[6]
  i6438.showUnityEditorReport = !!i6439[7]
  i6438.logBehaviour = i6439[8]
  i6438.drawGizmos = !!i6439[9]
  i6438.defaultRecyclable = !!i6439[10]
  i6438.defaultAutoPlay = i6439[11]
  i6438.defaultUpdateType = i6439[12]
  i6438.defaultTimeScaleIndependent = !!i6439[13]
  i6438.defaultEaseType = i6439[14]
  i6438.defaultEaseOvershootOrAmplitude = i6439[15]
  i6438.defaultEasePeriod = i6439[16]
  i6438.defaultAutoKill = !!i6439[17]
  i6438.defaultLoopType = i6439[18]
  i6438.debugMode = !!i6439[19]
  i6438.debugStoreTargetId = !!i6439[20]
  i6438.showPreviewPanel = !!i6439[21]
  i6438.storeSettingsLocation = i6439[22]
  i6438.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i6439[23], i6438.modules)
  i6438.createASMDEF = !!i6439[24]
  i6438.showPlayingTweens = !!i6439[25]
  i6438.showPausedTweens = !!i6439[26]
  return i6438
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i6440 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i6441 = data
  i6440.logBehaviour = i6441[0]
  i6440.nestedTweenFailureBehaviour = i6441[1]
  return i6440
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i6442 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i6443 = data
  i6442.showPanel = !!i6443[0]
  i6442.audioEnabled = !!i6443[1]
  i6442.physicsEnabled = !!i6443[2]
  i6442.physics2DEnabled = !!i6443[3]
  i6442.spriteEnabled = !!i6443[4]
  i6442.uiEnabled = !!i6443[5]
  i6442.textMeshProEnabled = !!i6443[6]
  i6442.tk2DEnabled = !!i6443[7]
  i6442.deAudioEnabled = !!i6443[8]
  i6442.deUnityExtendedEnabled = !!i6443[9]
  i6442.epoOutlineEnabled = !!i6443[10]
  return i6442
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i6444 = root || request.c( 'TMPro.TMP_Settings' )
  var i6445 = data
  i6444.m_enableWordWrapping = !!i6445[0]
  i6444.m_enableKerning = !!i6445[1]
  i6444.m_enableExtraPadding = !!i6445[2]
  i6444.m_enableTintAllSprites = !!i6445[3]
  i6444.m_enableParseEscapeCharacters = !!i6445[4]
  i6444.m_EnableRaycastTarget = !!i6445[5]
  i6444.m_GetFontFeaturesAtRuntime = !!i6445[6]
  i6444.m_missingGlyphCharacter = i6445[7]
  i6444.m_warningsDisabled = !!i6445[8]
  request.r(i6445[9], i6445[10], 0, i6444, 'm_defaultFontAsset')
  i6444.m_defaultFontAssetPath = i6445[11]
  i6444.m_defaultFontSize = i6445[12]
  i6444.m_defaultAutoSizeMinRatio = i6445[13]
  i6444.m_defaultAutoSizeMaxRatio = i6445[14]
  i6444.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i6445[15], i6445[16] )
  i6444.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i6445[17], i6445[18] )
  i6444.m_autoSizeTextContainer = !!i6445[19]
  i6444.m_IsTextObjectScaleStatic = !!i6445[20]
  var i6447 = i6445[21]
  var i6446 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6447.length; i += 2) {
  request.r(i6447[i + 0], i6447[i + 1], 1, i6446, '')
  }
  i6444.m_fallbackFontAssets = i6446
  i6444.m_matchMaterialPreset = !!i6445[22]
  request.r(i6445[23], i6445[24], 0, i6444, 'm_defaultSpriteAsset')
  i6444.m_defaultSpriteAssetPath = i6445[25]
  i6444.m_enableEmojiSupport = !!i6445[26]
  i6444.m_MissingCharacterSpriteUnicode = i6445[27]
  i6444.m_defaultColorGradientPresetsPath = i6445[28]
  request.r(i6445[29], i6445[30], 0, i6444, 'm_defaultStyleSheet')
  i6444.m_StyleSheetsResourcePath = i6445[31]
  request.r(i6445[32], i6445[33], 0, i6444, 'm_leadingCharacters')
  request.r(i6445[34], i6445[35], 0, i6444, 'm_followingCharacters')
  i6444.m_UseModernHangulLineBreakingRules = !!i6445[36]
  return i6444
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i6450 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i6451 = data
  i6450.hashCode = i6451[0]
  request.r(i6451[1], i6451[2], 0, i6450, 'material')
  i6450.materialHashCode = i6451[3]
  request.r(i6451[4], i6451[5], 0, i6450, 'atlas')
  i6450.normalStyle = i6451[6]
  i6450.normalSpacingOffset = i6451[7]
  i6450.boldStyle = i6451[8]
  i6450.boldSpacing = i6451[9]
  i6450.italicStyle = i6451[10]
  i6450.tabSize = i6451[11]
  i6450.m_Version = i6451[12]
  i6450.m_SourceFontFileGUID = i6451[13]
  request.r(i6451[14], i6451[15], 0, i6450, 'm_SourceFontFile_EditorRef')
  request.r(i6451[16], i6451[17], 0, i6450, 'm_SourceFontFile')
  i6450.m_AtlasPopulationMode = i6451[18]
  i6450.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6451[19], i6450.m_FaceInfo)
  var i6453 = i6451[20]
  var i6452 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i6453.length; i += 1) {
    i6452.add(request.d('UnityEngine.TextCore.Glyph', i6453[i + 0]));
  }
  i6450.m_GlyphTable = i6452
  var i6455 = i6451[21]
  var i6454 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i6455.length; i += 1) {
    i6454.add(request.d('TMPro.TMP_Character', i6455[i + 0]));
  }
  i6450.m_CharacterTable = i6454
  var i6457 = i6451[22]
  var i6456 = []
  for(var i = 0; i < i6457.length; i += 2) {
  request.r(i6457[i + 0], i6457[i + 1], 2, i6456, '')
  }
  i6450.m_AtlasTextures = i6456
  i6450.m_AtlasTextureIndex = i6451[23]
  i6450.m_IsMultiAtlasTexturesEnabled = !!i6451[24]
  i6450.m_ClearDynamicDataOnBuild = !!i6451[25]
  var i6459 = i6451[26]
  var i6458 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6459.length; i += 1) {
    i6458.add(request.d('UnityEngine.TextCore.GlyphRect', i6459[i + 0]));
  }
  i6450.m_UsedGlyphRects = i6458
  var i6461 = i6451[27]
  var i6460 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6461.length; i += 1) {
    i6460.add(request.d('UnityEngine.TextCore.GlyphRect', i6461[i + 0]));
  }
  i6450.m_FreeGlyphRects = i6460
  i6450.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i6451[28], i6450.m_fontInfo)
  i6450.m_AtlasWidth = i6451[29]
  i6450.m_AtlasHeight = i6451[30]
  i6450.m_AtlasPadding = i6451[31]
  i6450.m_AtlasRenderMode = i6451[32]
  var i6463 = i6451[33]
  var i6462 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i6463.length; i += 1) {
    i6462.add(request.d('TMPro.TMP_Glyph', i6463[i + 0]));
  }
  i6450.m_glyphInfoList = i6462
  i6450.m_KerningTable = request.d('TMPro.KerningTable', i6451[34], i6450.m_KerningTable)
  i6450.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i6451[35], i6450.m_FontFeatureTable)
  var i6465 = i6451[36]
  var i6464 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6465.length; i += 2) {
  request.r(i6465[i + 0], i6465[i + 1], 1, i6464, '')
  }
  i6450.fallbackFontAssets = i6464
  var i6467 = i6451[37]
  var i6466 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6467.length; i += 2) {
  request.r(i6467[i + 0], i6467[i + 1], 1, i6466, '')
  }
  i6450.m_FallbackFontAssetTable = i6466
  i6450.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i6451[38], i6450.m_CreationSettings)
  var i6469 = i6451[39]
  var i6468 = []
  for(var i = 0; i < i6469.length; i += 1) {
    i6468.push( request.d('TMPro.TMP_FontWeightPair', i6469[i + 0]) );
  }
  i6450.m_FontWeightTable = i6468
  var i6471 = i6451[40]
  var i6470 = []
  for(var i = 0; i < i6471.length; i += 1) {
    i6470.push( request.d('TMPro.TMP_FontWeightPair', i6471[i + 0]) );
  }
  i6450.fontWeights = i6470
  return i6450
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i6472 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i6473 = data
  i6472.m_FaceIndex = i6473[0]
  i6472.m_FamilyName = i6473[1]
  i6472.m_StyleName = i6473[2]
  i6472.m_PointSize = i6473[3]
  i6472.m_Scale = i6473[4]
  i6472.m_UnitsPerEM = i6473[5]
  i6472.m_LineHeight = i6473[6]
  i6472.m_AscentLine = i6473[7]
  i6472.m_CapLine = i6473[8]
  i6472.m_MeanLine = i6473[9]
  i6472.m_Baseline = i6473[10]
  i6472.m_DescentLine = i6473[11]
  i6472.m_SuperscriptOffset = i6473[12]
  i6472.m_SuperscriptSize = i6473[13]
  i6472.m_SubscriptOffset = i6473[14]
  i6472.m_SubscriptSize = i6473[15]
  i6472.m_UnderlineOffset = i6473[16]
  i6472.m_UnderlineThickness = i6473[17]
  i6472.m_StrikethroughOffset = i6473[18]
  i6472.m_StrikethroughThickness = i6473[19]
  i6472.m_TabWidth = i6473[20]
  return i6472
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i6476 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i6477 = data
  i6476.m_Index = i6477[0]
  i6476.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6477[1], i6476.m_Metrics)
  i6476.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6477[2], i6476.m_GlyphRect)
  i6476.m_Scale = i6477[3]
  i6476.m_AtlasIndex = i6477[4]
  i6476.m_ClassDefinitionType = i6477[5]
  return i6476
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6478 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6479 = data
  i6478.m_Width = i6479[0]
  i6478.m_Height = i6479[1]
  i6478.m_HorizontalBearingX = i6479[2]
  i6478.m_HorizontalBearingY = i6479[3]
  i6478.m_HorizontalAdvance = i6479[4]
  return i6478
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6480 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6481 = data
  i6480.m_X = i6481[0]
  i6480.m_Y = i6481[1]
  i6480.m_Width = i6481[2]
  i6480.m_Height = i6481[3]
  return i6480
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i6484 = root || request.c( 'TMPro.TMP_Character' )
  var i6485 = data
  i6484.m_ElementType = i6485[0]
  i6484.m_Unicode = i6485[1]
  i6484.m_GlyphIndex = i6485[2]
  i6484.m_Scale = i6485[3]
  return i6484
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i6490 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i6491 = data
  i6490.Name = i6491[0]
  i6490.PointSize = i6491[1]
  i6490.Scale = i6491[2]
  i6490.CharacterCount = i6491[3]
  i6490.LineHeight = i6491[4]
  i6490.Baseline = i6491[5]
  i6490.Ascender = i6491[6]
  i6490.CapHeight = i6491[7]
  i6490.Descender = i6491[8]
  i6490.CenterLine = i6491[9]
  i6490.SuperscriptOffset = i6491[10]
  i6490.SubscriptOffset = i6491[11]
  i6490.SubSize = i6491[12]
  i6490.Underline = i6491[13]
  i6490.UnderlineThickness = i6491[14]
  i6490.strikethrough = i6491[15]
  i6490.strikethroughThickness = i6491[16]
  i6490.TabWidth = i6491[17]
  i6490.Padding = i6491[18]
  i6490.AtlasWidth = i6491[19]
  i6490.AtlasHeight = i6491[20]
  return i6490
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i6494 = root || request.c( 'TMPro.TMP_Glyph' )
  var i6495 = data
  i6494.id = i6495[0]
  i6494.x = i6495[1]
  i6494.y = i6495[2]
  i6494.width = i6495[3]
  i6494.height = i6495[4]
  i6494.xOffset = i6495[5]
  i6494.yOffset = i6495[6]
  i6494.xAdvance = i6495[7]
  i6494.scale = i6495[8]
  return i6494
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i6496 = root || request.c( 'TMPro.KerningTable' )
  var i6497 = data
  var i6499 = i6497[0]
  var i6498 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i6499.length; i += 1) {
    i6498.add(request.d('TMPro.KerningPair', i6499[i + 0]));
  }
  i6496.kerningPairs = i6498
  return i6496
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i6502 = root || request.c( 'TMPro.KerningPair' )
  var i6503 = data
  i6502.xOffset = i6503[0]
  i6502.m_FirstGlyph = i6503[1]
  i6502.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6503[2], i6502.m_FirstGlyphAdjustments)
  i6502.m_SecondGlyph = i6503[3]
  i6502.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6503[4], i6502.m_SecondGlyphAdjustments)
  i6502.m_IgnoreSpacingAdjustments = !!i6503[5]
  return i6502
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i6504 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i6505 = data
  var i6507 = i6505[0]
  var i6506 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i6507.length; i += 1) {
    i6506.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i6507[i + 0]));
  }
  i6504.m_GlyphPairAdjustmentRecords = i6506
  return i6504
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i6510 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i6511 = data
  i6510.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6511[0], i6510.m_FirstAdjustmentRecord)
  i6510.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6511[1], i6510.m_SecondAdjustmentRecord)
  i6510.m_FeatureLookupFlags = i6511[2]
  return i6510
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i6512 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i6513 = data
  i6512.m_GlyphIndex = i6513[0]
  i6512.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i6513[1], i6512.m_GlyphValueRecord)
  return i6512
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i6514 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i6515 = data
  i6514.m_XPlacement = i6515[0]
  i6514.m_YPlacement = i6515[1]
  i6514.m_XAdvance = i6515[2]
  i6514.m_YAdvance = i6515[3]
  return i6514
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i6516 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i6517 = data
  i6516.sourceFontFileName = i6517[0]
  i6516.sourceFontFileGUID = i6517[1]
  i6516.pointSizeSamplingMode = i6517[2]
  i6516.pointSize = i6517[3]
  i6516.padding = i6517[4]
  i6516.packingMode = i6517[5]
  i6516.atlasWidth = i6517[6]
  i6516.atlasHeight = i6517[7]
  i6516.characterSetSelectionMode = i6517[8]
  i6516.characterSequence = i6517[9]
  i6516.referencedFontAssetGUID = i6517[10]
  i6516.referencedTextAssetGUID = i6517[11]
  i6516.fontStyle = i6517[12]
  i6516.fontStyleModifier = i6517[13]
  i6516.renderMode = i6517[14]
  i6516.includeFontFeatures = !!i6517[15]
  return i6516
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i6520 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i6521 = data
  request.r(i6521[0], i6521[1], 0, i6520, 'regularTypeface')
  request.r(i6521[2], i6521[3], 0, i6520, 'italicTypeface')
  return i6520
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i6522 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i6523 = data
  i6522.hashCode = i6523[0]
  request.r(i6523[1], i6523[2], 0, i6522, 'material')
  i6522.materialHashCode = i6523[3]
  request.r(i6523[4], i6523[5], 0, i6522, 'spriteSheet')
  var i6525 = i6523[6]
  var i6524 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i6525.length; i += 1) {
    i6524.add(request.d('TMPro.TMP_Sprite', i6525[i + 0]));
  }
  i6522.spriteInfoList = i6524
  var i6527 = i6523[7]
  var i6526 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i6527.length; i += 2) {
  request.r(i6527[i + 0], i6527[i + 1], 1, i6526, '')
  }
  i6522.fallbackSpriteAssets = i6526
  i6522.m_Version = i6523[8]
  i6522.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6523[9], i6522.m_FaceInfo)
  var i6529 = i6523[10]
  var i6528 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i6529.length; i += 1) {
    i6528.add(request.d('TMPro.TMP_SpriteCharacter', i6529[i + 0]));
  }
  i6522.m_SpriteCharacterTable = i6528
  var i6531 = i6523[11]
  var i6530 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i6531.length; i += 1) {
    i6530.add(request.d('TMPro.TMP_SpriteGlyph', i6531[i + 0]));
  }
  i6522.m_SpriteGlyphTable = i6530
  return i6522
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i6534 = root || request.c( 'TMPro.TMP_Sprite' )
  var i6535 = data
  i6534.name = i6535[0]
  i6534.hashCode = i6535[1]
  i6534.unicode = i6535[2]
  i6534.pivot = new pc.Vec2( i6535[3], i6535[4] )
  request.r(i6535[5], i6535[6], 0, i6534, 'sprite')
  i6534.id = i6535[7]
  i6534.x = i6535[8]
  i6534.y = i6535[9]
  i6534.width = i6535[10]
  i6534.height = i6535[11]
  i6534.xOffset = i6535[12]
  i6534.yOffset = i6535[13]
  i6534.xAdvance = i6535[14]
  i6534.scale = i6535[15]
  return i6534
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i6540 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i6541 = data
  i6540.m_Name = i6541[0]
  i6540.m_HashCode = i6541[1]
  i6540.m_ElementType = i6541[2]
  i6540.m_Unicode = i6541[3]
  i6540.m_GlyphIndex = i6541[4]
  i6540.m_Scale = i6541[5]
  return i6540
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i6544 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i6545 = data
  request.r(i6545[0], i6545[1], 0, i6544, 'sprite')
  i6544.m_Index = i6545[2]
  i6544.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6545[3], i6544.m_Metrics)
  i6544.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6545[4], i6544.m_GlyphRect)
  i6544.m_Scale = i6545[5]
  i6544.m_AtlasIndex = i6545[6]
  i6544.m_ClassDefinitionType = i6545[7]
  return i6544
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i6546 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i6547 = data
  var i6549 = i6547[0]
  var i6548 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i6549.length; i += 1) {
    i6548.add(request.d('TMPro.TMP_Style', i6549[i + 0]));
  }
  i6546.m_StyleList = i6548
  return i6546
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i6552 = root || request.c( 'TMPro.TMP_Style' )
  var i6553 = data
  i6552.m_Name = i6553[0]
  i6552.m_HashCode = i6553[1]
  i6552.m_OpeningDefinition = i6553[2]
  i6552.m_ClosingDefinition = i6553[3]
  i6552.m_OpeningTagArray = i6553[4]
  i6552.m_ClosingTagArray = i6553[5]
  i6552.m_OpeningTagUnicodeArray = i6553[6]
  i6552.m_ClosingTagUnicodeArray = i6553[7]
  return i6552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6555 = data
  var i6557 = i6555[0]
  var i6556 = []
  for(var i = 0; i < i6557.length; i += 1) {
    i6556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6557[i + 0]) );
  }
  i6554.files = i6556
  i6554.componentToPrefabIds = i6555[1]
  return i6554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6561 = data
  i6560.path = i6561[0]
  request.r(i6561[1], i6561[2], 0, i6560, 'unityObject')
  return i6560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6563 = data
  var i6565 = i6563[0]
  var i6564 = []
  for(var i = 0; i < i6565.length; i += 1) {
    i6564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6565[i + 0]) );
  }
  i6562.scriptsExecutionOrder = i6564
  var i6567 = i6563[1]
  var i6566 = []
  for(var i = 0; i < i6567.length; i += 1) {
    i6566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6567[i + 0]) );
  }
  i6562.sortingLayers = i6566
  var i6569 = i6563[2]
  var i6568 = []
  for(var i = 0; i < i6569.length; i += 1) {
    i6568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6569[i + 0]) );
  }
  i6562.cullingLayers = i6568
  i6562.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6563[3], i6562.timeSettings)
  i6562.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6563[4], i6562.physicsSettings)
  i6562.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6563[5], i6562.physics2DSettings)
  i6562.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6563[6], i6562.qualitySettings)
  i6562.enableRealtimeShadows = !!i6563[7]
  i6562.enableAutoInstancing = !!i6563[8]
  i6562.enableDynamicBatching = !!i6563[9]
  i6562.lightmapEncodingQuality = i6563[10]
  i6562.desiredColorSpace = i6563[11]
  var i6571 = i6563[12]
  var i6570 = []
  for(var i = 0; i < i6571.length; i += 1) {
    i6570.push( i6571[i + 0] );
  }
  i6562.allTags = i6570
  return i6562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6575 = data
  i6574.name = i6575[0]
  i6574.value = i6575[1]
  return i6574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6579 = data
  i6578.id = i6579[0]
  i6578.name = i6579[1]
  i6578.value = i6579[2]
  return i6578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6583 = data
  i6582.id = i6583[0]
  i6582.name = i6583[1]
  return i6582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6585 = data
  i6584.fixedDeltaTime = i6585[0]
  i6584.maximumDeltaTime = i6585[1]
  i6584.timeScale = i6585[2]
  i6584.maximumParticleTimestep = i6585[3]
  return i6584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6587 = data
  i6586.gravity = new pc.Vec3( i6587[0], i6587[1], i6587[2] )
  i6586.defaultSolverIterations = i6587[3]
  i6586.bounceThreshold = i6587[4]
  i6586.autoSyncTransforms = !!i6587[5]
  i6586.autoSimulation = !!i6587[6]
  var i6589 = i6587[7]
  var i6588 = []
  for(var i = 0; i < i6589.length; i += 1) {
    i6588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6589[i + 0]) );
  }
  i6586.collisionMatrix = i6588
  return i6586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6593 = data
  i6592.enabled = !!i6593[0]
  i6592.layerId = i6593[1]
  i6592.otherLayerId = i6593[2]
  return i6592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6595 = data
  request.r(i6595[0], i6595[1], 0, i6594, 'material')
  i6594.gravity = new pc.Vec2( i6595[2], i6595[3] )
  i6594.positionIterations = i6595[4]
  i6594.velocityIterations = i6595[5]
  i6594.velocityThreshold = i6595[6]
  i6594.maxLinearCorrection = i6595[7]
  i6594.maxAngularCorrection = i6595[8]
  i6594.maxTranslationSpeed = i6595[9]
  i6594.maxRotationSpeed = i6595[10]
  i6594.baumgarteScale = i6595[11]
  i6594.baumgarteTOIScale = i6595[12]
  i6594.timeToSleep = i6595[13]
  i6594.linearSleepTolerance = i6595[14]
  i6594.angularSleepTolerance = i6595[15]
  i6594.defaultContactOffset = i6595[16]
  i6594.autoSimulation = !!i6595[17]
  i6594.queriesHitTriggers = !!i6595[18]
  i6594.queriesStartInColliders = !!i6595[19]
  i6594.callbacksOnDisable = !!i6595[20]
  i6594.reuseCollisionCallbacks = !!i6595[21]
  i6594.autoSyncTransforms = !!i6595[22]
  var i6597 = i6595[23]
  var i6596 = []
  for(var i = 0; i < i6597.length; i += 1) {
    i6596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6597[i + 0]) );
  }
  i6594.collisionMatrix = i6596
  return i6594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6601 = data
  i6600.enabled = !!i6601[0]
  i6600.layerId = i6601[1]
  i6600.otherLayerId = i6601[2]
  return i6600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6603 = data
  var i6605 = i6603[0]
  var i6604 = []
  for(var i = 0; i < i6605.length; i += 1) {
    i6604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6605[i + 0]) );
  }
  i6602.qualityLevels = i6604
  var i6607 = i6603[1]
  var i6606 = []
  for(var i = 0; i < i6607.length; i += 1) {
    i6606.push( i6607[i + 0] );
  }
  i6602.names = i6606
  i6602.shadows = i6603[2]
  i6602.anisotropicFiltering = i6603[3]
  i6602.antiAliasing = i6603[4]
  i6602.lodBias = i6603[5]
  i6602.shadowCascades = i6603[6]
  i6602.shadowDistance = i6603[7]
  i6602.shadowmaskMode = i6603[8]
  i6602.shadowProjection = i6603[9]
  i6602.shadowResolution = i6603[10]
  i6602.softParticles = !!i6603[11]
  i6602.softVegetation = !!i6603[12]
  i6602.activeColorSpace = i6603[13]
  i6602.desiredColorSpace = i6603[14]
  i6602.masterTextureLimit = i6603[15]
  i6602.maxQueuedFrames = i6603[16]
  i6602.particleRaycastBudget = i6603[17]
  i6602.pixelLightCount = i6603[18]
  i6602.realtimeReflectionProbes = !!i6603[19]
  i6602.shadowCascade2Split = i6603[20]
  i6602.shadowCascade4Split = new pc.Vec3( i6603[21], i6603[22], i6603[23] )
  i6602.streamingMipmapsActive = !!i6603[24]
  i6602.vSyncCount = i6603[25]
  i6602.asyncUploadBufferSize = i6603[26]
  i6602.asyncUploadTimeSlice = i6603[27]
  i6602.billboardsFaceCameraPosition = !!i6603[28]
  i6602.shadowNearPlaneOffset = i6603[29]
  i6602.streamingMipmapsMemoryBudget = i6603[30]
  i6602.maximumLODLevel = i6603[31]
  i6602.streamingMipmapsAddAllCameras = !!i6603[32]
  i6602.streamingMipmapsMaxLevelReduction = i6603[33]
  i6602.streamingMipmapsRenderersPerFrame = i6603[34]
  i6602.resolutionScalingFixedDPIFactor = i6603[35]
  i6602.streamingMipmapsMaxFileIORequests = i6603[36]
  i6602.currentQualityLevel = i6603[37]
  return i6602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6613 = data
  i6612.mode = i6613[0]
  i6612.parameter = i6613[1]
  i6612.threshold = i6613[2]
  return i6612
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6614 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6615 = data
  i6614.xPlacement = i6615[0]
  i6614.yPlacement = i6615[1]
  i6614.xAdvance = i6615[2]
  i6614.yAdvance = i6615[3]
  return i6614
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.PlatformEffector2D":{"enabled":0,"useColliderMask":1,"colliderMask":2},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[94],"95":[28],"96":[97],"98":[97],"99":[97],"100":[97],"101":[97],"102":[97],"103":[97],"104":[6],"105":[6],"106":[6],"107":[6],"108":[6],"109":[6],"110":[6],"111":[6],"112":[6],"113":[6],"114":[6],"115":[6],"116":[6],"117":[28],"118":[119],"120":[121],"122":[121],"32":[13],"8":[6],"123":[14,21,13],"58":[13],"124":[28],"31":[28],"125":[126],"127":[128],"129":[13],"130":[13],"34":[32],"16":[14,13],"131":[13],"33":[32],"41":[13],"132":[13],"65":[13],"133":[13],"45":[13],"134":[13],"40":[13],"47":[13],"135":[13],"136":[14,13],"137":[13],"46":[13],"44":[13],"138":[13],"24":[14,13],"51":[13],"139":[37],"140":[37],"38":[37],"141":[37],"142":[28],"143":[28],"144":[128],"145":[13],"146":[119,13],"147":[13,14],"148":[13],"149":[14,13],"150":[119],"151":[14,13],"152":[13],"153":[128]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","PlayerController","GameManager","UnityEngine.GameObject","UnityEngine.BoxCollider2D","UnityEngine.Shader","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.EdgeCollider2D","PlatformScript","UnityEngine.PlatformEffector2D","Shroom","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Winner","UnityEngine.UI.Text","UnityEngine.Texture2D","PauseManager","LevelGenerator","UnityEngine.Camera","UnityEngine.AudioListener","CamraFollow","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/07/2025 09:40:47";

Deserializers.lunaDaysRunning = "0.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1922";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3208";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, prefabs, mecanim-wasm";

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

Deserializers.buildID = "5239bb06-c7dd-4255-ab32-7cd0abeb4ae3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

