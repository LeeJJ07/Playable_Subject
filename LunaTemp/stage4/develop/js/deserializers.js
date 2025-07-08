var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.JointSpring' )
  var i1033 = data
  i1032.spring = i1033[0]
  i1032.damper = i1033[1]
  i1032.targetPosition = i1033[2]
  return i1032
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.JointMotor' )
  var i1035 = data
  i1034.m_TargetVelocity = i1035[0]
  i1034.m_Force = i1035[1]
  i1034.m_FreeSpin = i1035[2]
  return i1034
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1036 = root || request.c( 'UnityEngine.JointLimits' )
  var i1037 = data
  i1036.m_Min = i1037[0]
  i1036.m_Max = i1037[1]
  i1036.m_Bounciness = i1037[2]
  i1036.m_BounceMinVelocity = i1037[3]
  i1036.m_ContactDistance = i1037[4]
  i1036.minBounce = i1037[5]
  i1036.maxBounce = i1037[6]
  return i1036
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.JointDrive' )
  var i1039 = data
  i1038.m_PositionSpring = i1039[0]
  i1038.m_PositionDamper = i1039[1]
  i1038.m_MaximumForce = i1039[2]
  i1038.m_UseAcceleration = i1039[3]
  return i1038
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1041 = data
  i1040.m_Spring = i1041[0]
  i1040.m_Damper = i1041[1]
  return i1040
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1043 = data
  i1042.m_Limit = i1043[0]
  i1042.m_Bounciness = i1043[1]
  i1042.m_ContactDistance = i1043[2]
  return i1042
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1045 = data
  i1044.m_ExtremumSlip = i1045[0]
  i1044.m_ExtremumValue = i1045[1]
  i1044.m_AsymptoteSlip = i1045[2]
  i1044.m_AsymptoteValue = i1045[3]
  i1044.m_Stiffness = i1045[4]
  return i1044
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1047 = data
  i1046.m_LowerAngle = i1047[0]
  i1046.m_UpperAngle = i1047[1]
  return i1046
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1049 = data
  i1048.m_MotorSpeed = i1049[0]
  i1048.m_MaximumMotorTorque = i1049[1]
  return i1048
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1051 = data
  i1050.m_DampingRatio = i1051[0]
  i1050.m_Frequency = i1051[1]
  i1050.m_Angle = i1051[2]
  return i1050
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1053 = data
  i1052.m_LowerTranslation = i1053[0]
  i1052.m_UpperTranslation = i1053[1]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1055 = data
  i1054.position = new pc.Vec3( i1055[0], i1055[1], i1055[2] )
  i1054.scale = new pc.Vec3( i1055[3], i1055[4], i1055[5] )
  i1054.rotation = new pc.Quat(i1055[6], i1055[7], i1055[8], i1055[9])
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'sharedMesh')
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'additionalVertexStreams')
  i1058.enabled = !!i1059[2]
  request.r(i1059[3], i1059[4], 0, i1058, 'sharedMaterial')
  var i1061 = i1059[5]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 2) {
  request.r(i1061[i + 0], i1061[i + 1], 2, i1060, '')
  }
  i1058.sharedMaterials = i1060
  i1058.receiveShadows = !!i1059[6]
  i1058.shadowCastingMode = i1059[7]
  i1058.sortingLayerID = i1059[8]
  i1058.sortingOrder = i1059[9]
  i1058.lightmapIndex = i1059[10]
  i1058.lightmapSceneIndex = i1059[11]
  i1058.lightmapScaleOffset = new pc.Vec4( i1059[12], i1059[13], i1059[14], i1059[15] )
  i1058.lightProbeUsage = i1059[16]
  i1058.reflectionProbeUsage = i1059[17]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1065 = data
  i1064.center = new pc.Vec3( i1065[0], i1065[1], i1065[2] )
  i1064.size = new pc.Vec3( i1065[3], i1065[4], i1065[5] )
  i1064.enabled = !!i1065[6]
  i1064.isTrigger = !!i1065[7]
  request.r(i1065[8], i1065[9], 0, i1064, 'material')
  return i1064
}

Deserializers["Box"] = function (request, data, root) {
  var i1066 = root || request.c( 'Box' )
  var i1067 = data
  request.r(i1067[0], i1067[1], 0, i1066, 'goodsPrefab')
  i1066.goodsID = i1067[2]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1069 = data
  i1068.name = i1069[0]
  i1068.tagId = i1069[1]
  i1068.enabled = !!i1069[2]
  i1068.isStatic = !!i1069[3]
  i1068.layer = i1069[4]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1071 = data
  i1070.name = i1071[0]
  i1070.halfPrecision = !!i1071[1]
  i1070.useUInt32IndexFormat = !!i1071[2]
  i1070.vertexCount = i1071[3]
  i1070.aabb = i1071[4]
  var i1073 = i1071[5]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( !!i1073[i + 0] );
  }
  i1070.streams = i1072
  i1070.vertices = i1071[6]
  var i1075 = i1071[7]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1075[i + 0]) );
  }
  i1070.subMeshes = i1074
  var i1077 = i1071[8]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 16) {
    i1076.push( new pc.Mat4().setData(i1077[i + 0], i1077[i + 1], i1077[i + 2], i1077[i + 3],  i1077[i + 4], i1077[i + 5], i1077[i + 6], i1077[i + 7],  i1077[i + 8], i1077[i + 9], i1077[i + 10], i1077[i + 11],  i1077[i + 12], i1077[i + 13], i1077[i + 14], i1077[i + 15]) );
  }
  i1070.bindposes = i1076
  var i1079 = i1071[9]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1079[i + 0]) );
  }
  i1070.blendShapes = i1078
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1085 = data
  i1084.triangles = i1085[0]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1091 = data
  i1090.name = i1091[0]
  var i1093 = i1091[1]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1093[i + 0]) );
  }
  i1090.frames = i1092
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1094 = root || new pc.UnityMaterial()
  var i1095 = data
  i1094.name = i1095[0]
  request.r(i1095[1], i1095[2], 0, i1094, 'shader')
  i1094.renderQueue = i1095[3]
  i1094.enableInstancing = !!i1095[4]
  var i1097 = i1095[5]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1097[i + 0]) );
  }
  i1094.floatParameters = i1096
  var i1099 = i1095[6]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1099[i + 0]) );
  }
  i1094.colorParameters = i1098
  var i1101 = i1095[7]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1101[i + 0]) );
  }
  i1094.vectorParameters = i1100
  var i1103 = i1095[8]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1103[i + 0]) );
  }
  i1094.textureParameters = i1102
  var i1105 = i1095[9]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1105[i + 0]) );
  }
  i1094.materialFlags = i1104
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1109 = data
  i1108.name = i1109[0]
  i1108.value = i1109[1]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1113 = data
  i1112.name = i1113[0]
  i1112.value = new pc.Color(i1113[1], i1113[2], i1113[3], i1113[4])
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1117 = data
  i1116.name = i1117[0]
  i1116.value = new pc.Vec4( i1117[1], i1117[2], i1117[3], i1117[4] )
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1121 = data
  i1120.name = i1121[0]
  request.r(i1121[1], i1121[2], 0, i1120, 'value')
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1125 = data
  i1124.name = i1125[0]
  i1124.enabled = !!i1125[1]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1127 = data
  i1126.name = i1127[0]
  i1126.width = i1127[1]
  i1126.height = i1127[2]
  i1126.mipmapCount = i1127[3]
  i1126.anisoLevel = i1127[4]
  i1126.filterMode = i1127[5]
  i1126.hdr = !!i1127[6]
  i1126.format = i1127[7]
  i1126.wrapMode = i1127[8]
  i1126.alphaIsTransparency = !!i1127[9]
  i1126.alphaSource = i1127[10]
  i1126.graphicsFormat = i1127[11]
  i1126.sRGBTexture = !!i1127[12]
  i1126.desiredColorSpace = i1127[13]
  i1126.wrapU = i1127[14]
  i1126.wrapV = i1127[15]
  return i1126
}

Deserializers["DraggableObject"] = function (request, data, root) {
  var i1128 = root || request.c( 'DraggableObject' )
  var i1129 = data
  i1128.objectZPosition = i1129[0]
  return i1128
}

Deserializers["Goods"] = function (request, data, root) {
  var i1130 = root || request.c( 'Goods' )
  var i1131 = data
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1133 = data
  i1132.name = i1133[0]
  i1132.atlasId = i1133[1]
  i1132.mipmapCount = i1133[2]
  i1132.hdr = !!i1133[3]
  i1132.size = i1133[4]
  i1132.anisoLevel = i1133[5]
  i1132.filterMode = i1133[6]
  var i1135 = i1133[7]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 4) {
    i1134.push( UnityEngine.Rect.MinMaxRect(i1135[i + 0], i1135[i + 1], i1135[i + 2], i1135[i + 3]) );
  }
  i1132.rects = i1134
  i1132.wrapU = i1133[8]
  i1132.wrapV = i1133[9]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1139 = data
  i1138.name = i1139[0]
  i1138.index = i1139[1]
  i1138.startup = !!i1139[2]
  return i1138
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1140 = root || request.c( 'GameManager' )
  var i1141 = data
  i1140.floorCount = i1141[0]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1143 = data
  i1142.enabled = !!i1143[0]
  i1142.aspect = i1143[1]
  i1142.orthographic = !!i1143[2]
  i1142.orthographicSize = i1143[3]
  i1142.backgroundColor = new pc.Color(i1143[4], i1143[5], i1143[6], i1143[7])
  i1142.nearClipPlane = i1143[8]
  i1142.farClipPlane = i1143[9]
  i1142.fieldOfView = i1143[10]
  i1142.depth = i1143[11]
  i1142.clearFlags = i1143[12]
  i1142.cullingMask = i1143[13]
  i1142.rect = i1143[14]
  request.r(i1143[15], i1143[16], 0, i1142, 'targetTexture')
  i1142.usePhysicalProperties = !!i1143[17]
  i1142.focalLength = i1143[18]
  i1142.sensorSize = new pc.Vec2( i1143[19], i1143[20] )
  i1142.lensShift = new pc.Vec2( i1143[21], i1143[22] )
  i1142.gateFit = i1143[23]
  i1142.commandBufferCount = i1143[24]
  i1142.cameraType = i1143[25]
  return i1142
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i1145 = data
  i1144.m_RenderShadows = !!i1145[0]
  i1144.m_RequiresDepthTextureOption = i1145[1]
  i1144.m_RequiresOpaqueTextureOption = i1145[2]
  i1144.m_CameraType = i1145[3]
  var i1147 = i1145[4]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i1147.length; i += 2) {
  request.r(i1147[i + 0], i1147[i + 1], 1, i1146, '')
  }
  i1144.m_Cameras = i1146
  i1144.m_RendererIndex = i1145[5]
  i1144.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1145[6] )
  request.r(i1145[7], i1145[8], 0, i1144, 'm_VolumeTrigger')
  i1144.m_VolumeFrameworkUpdateModeOption = i1145[9]
  i1144.m_RenderPostProcessing = !!i1145[10]
  i1144.m_Antialiasing = i1145[11]
  i1144.m_AntialiasingQuality = i1145[12]
  i1144.m_StopNaN = !!i1145[13]
  i1144.m_Dithering = !!i1145[14]
  i1144.m_ClearDepth = !!i1145[15]
  i1144.m_AllowXRRendering = !!i1145[16]
  i1144.m_AllowHDROutput = !!i1145[17]
  i1144.m_UseScreenCoordOverride = !!i1145[18]
  i1144.m_ScreenSizeOverride = new pc.Vec4( i1145[19], i1145[20], i1145[21], i1145[22] )
  i1144.m_ScreenCoordScaleBias = new pc.Vec4( i1145[23], i1145[24], i1145[25], i1145[26] )
  i1144.m_RequiresDepthTexture = !!i1145[27]
  i1144.m_RequiresColorTexture = !!i1145[28]
  i1144.m_Version = i1145[29]
  i1144.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i1145[30], i1144.m_TaaSettings)
  return i1144
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i1150 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i1151 = data
  i1150.m_Quality = i1151[0]
  i1150.m_FrameInfluence = i1151[1]
  i1150.m_JitterScale = i1151[2]
  i1150.m_MipBias = i1151[3]
  i1150.m_VarianceClampScale = i1151[4]
  i1150.m_ContrastAdaptiveSharpening = i1151[5]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1153 = data
  i1152.enabled = !!i1153[0]
  i1152.type = i1153[1]
  i1152.color = new pc.Color(i1153[2], i1153[3], i1153[4], i1153[5])
  i1152.cullingMask = i1153[6]
  i1152.intensity = i1153[7]
  i1152.range = i1153[8]
  i1152.spotAngle = i1153[9]
  i1152.shadows = i1153[10]
  i1152.shadowNormalBias = i1153[11]
  i1152.shadowBias = i1153[12]
  i1152.shadowStrength = i1153[13]
  i1152.shadowResolution = i1153[14]
  i1152.lightmapBakeType = i1153[15]
  i1152.renderMode = i1153[16]
  request.r(i1153[17], i1153[18], 0, i1152, 'cookie')
  i1152.cookieSize = i1153[19]
  return i1152
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i1155 = data
  i1154.m_Version = i1155[0]
  i1154.m_UsePipelineSettings = !!i1155[1]
  i1154.m_AdditionalLightsShadowResolutionTier = i1155[2]
  i1154.m_LightLayerMask = i1155[3]
  i1154.m_RenderingLayers = i1155[4]
  i1154.m_CustomShadowLayers = !!i1155[5]
  i1154.m_ShadowLayerMask = i1155[6]
  i1154.m_ShadowRenderingLayers = i1155[7]
  i1154.m_LightCookieSize = new pc.Vec2( i1155[8], i1155[9] )
  i1154.m_LightCookieOffset = new pc.Vec2( i1155[10], i1155[11] )
  i1154.m_SoftShadowQuality = i1155[12]
  return i1154
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i1157 = data
  i1156.priority = i1157[0]
  i1156.blendDistance = i1157[1]
  i1156.weight = i1157[2]
  request.r(i1157[3], i1157[4], 0, i1156, 'sharedProfile')
  i1156.m_IsGlobal = !!i1157[5]
  return i1156
}

Deserializers["BoxController"] = function (request, data, root) {
  var i1158 = root || request.c( 'BoxController' )
  var i1159 = data
  i1158.ease = i1159[0]
  i1158.dropDuration = i1159[1]
  i1158.startPosition = new pc.Vec3( i1159[2], i1159[3], i1159[4] )
  i1158.boxWidth = i1159[5]
  i1158.boxHeight = i1159[6]
  i1158.spacingX = i1159[7]
  request.r(i1159[8], i1159[9], 0, i1158, 'boxPrefab')
  var i1161 = i1159[10]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 2) {
  request.r(i1161[i + 0], i1161[i + 1], 2, i1160, '')
  }
  i1158.floorMaterials = i1160
  var i1163 = i1159[11]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 2) {
  request.r(i1163[i + 0], i1163[i + 1], 2, i1162, '')
  }
  i1158.goodsMaterials = i1162
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1165 = data
  i1164.pivot = new pc.Vec2( i1165[0], i1165[1] )
  i1164.anchorMin = new pc.Vec2( i1165[2], i1165[3] )
  i1164.anchorMax = new pc.Vec2( i1165[4], i1165[5] )
  i1164.sizeDelta = new pc.Vec2( i1165[6], i1165[7] )
  i1164.anchoredPosition3D = new pc.Vec3( i1165[8], i1165[9], i1165[10] )
  i1164.rotation = new pc.Quat(i1165[11], i1165[12], i1165[13], i1165[14])
  i1164.scale = new pc.Vec3( i1165[15], i1165[16], i1165[17] )
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1167 = data
  i1166.enabled = !!i1167[0]
  i1166.planeDistance = i1167[1]
  i1166.referencePixelsPerUnit = i1167[2]
  i1166.isFallbackOverlay = !!i1167[3]
  i1166.renderMode = i1167[4]
  i1166.renderOrder = i1167[5]
  i1166.sortingLayerName = i1167[6]
  i1166.sortingOrder = i1167[7]
  i1166.scaleFactor = i1167[8]
  request.r(i1167[9], i1167[10], 0, i1166, 'worldCamera')
  i1166.overrideSorting = !!i1167[11]
  i1166.pixelPerfect = !!i1167[12]
  i1166.targetDisplay = i1167[13]
  i1166.overridePixelPerfect = !!i1167[14]
  return i1166
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1169 = data
  i1168.m_UiScaleMode = i1169[0]
  i1168.m_ReferencePixelsPerUnit = i1169[1]
  i1168.m_ScaleFactor = i1169[2]
  i1168.m_ReferenceResolution = new pc.Vec2( i1169[3], i1169[4] )
  i1168.m_ScreenMatchMode = i1169[5]
  i1168.m_MatchWidthOrHeight = i1169[6]
  i1168.m_PhysicalUnit = i1169[7]
  i1168.m_FallbackScreenDPI = i1169[8]
  i1168.m_DefaultSpriteDPI = i1169[9]
  i1168.m_DynamicPixelsPerUnit = i1169[10]
  i1168.m_PresetInfoIsWorld = !!i1169[11]
  return i1168
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1171 = data
  i1170.m_IgnoreReversedGraphics = !!i1171[0]
  i1170.m_BlockingObjects = i1171[1]
  i1170.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1171[2] )
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1173 = data
  i1172.cullTransparentMesh = !!i1173[0]
  return i1172
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.UI.Image' )
  var i1175 = data
  request.r(i1175[0], i1175[1], 0, i1174, 'm_Sprite')
  i1174.m_Type = i1175[2]
  i1174.m_PreserveAspect = !!i1175[3]
  i1174.m_FillCenter = !!i1175[4]
  i1174.m_FillMethod = i1175[5]
  i1174.m_FillAmount = i1175[6]
  i1174.m_FillClockwise = !!i1175[7]
  i1174.m_FillOrigin = i1175[8]
  i1174.m_UseSpriteMesh = !!i1175[9]
  i1174.m_PixelsPerUnitMultiplier = i1175[10]
  request.r(i1175[11], i1175[12], 0, i1174, 'm_Material')
  i1174.m_Maskable = !!i1175[13]
  i1174.m_Color = new pc.Color(i1175[14], i1175[15], i1175[16], i1175[17])
  i1174.m_RaycastTarget = !!i1175[18]
  i1174.m_RaycastPadding = new pc.Vec4( i1175[19], i1175[20], i1175[21], i1175[22] )
  return i1174
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1177 = data
  request.r(i1177[0], i1177[1], 0, i1176, 'm_FirstSelected')
  i1176.m_sendNavigationEvents = !!i1177[2]
  i1176.m_DragThreshold = i1177[3]
  return i1176
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1179 = data
  i1178.m_HorizontalAxis = i1179[0]
  i1178.m_VerticalAxis = i1179[1]
  i1178.m_SubmitButton = i1179[2]
  i1178.m_CancelButton = i1179[3]
  i1178.m_InputActionsPerSecond = i1179[4]
  i1178.m_RepeatDelay = i1179[5]
  i1178.m_ForceModuleActive = !!i1179[6]
  i1178.m_SendPointerHoverToParent = !!i1179[7]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1181 = data
  i1180.ambientIntensity = i1181[0]
  i1180.reflectionIntensity = i1181[1]
  i1180.ambientMode = i1181[2]
  i1180.ambientLight = new pc.Color(i1181[3], i1181[4], i1181[5], i1181[6])
  i1180.ambientSkyColor = new pc.Color(i1181[7], i1181[8], i1181[9], i1181[10])
  i1180.ambientGroundColor = new pc.Color(i1181[11], i1181[12], i1181[13], i1181[14])
  i1180.ambientEquatorColor = new pc.Color(i1181[15], i1181[16], i1181[17], i1181[18])
  i1180.fogColor = new pc.Color(i1181[19], i1181[20], i1181[21], i1181[22])
  i1180.fogEndDistance = i1181[23]
  i1180.fogStartDistance = i1181[24]
  i1180.fogDensity = i1181[25]
  i1180.fog = !!i1181[26]
  request.r(i1181[27], i1181[28], 0, i1180, 'skybox')
  i1180.fogMode = i1181[29]
  var i1183 = i1181[30]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1183[i + 0]) );
  }
  i1180.lightmaps = i1182
  i1180.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1181[31], i1180.lightProbes)
  i1180.lightmapsMode = i1181[32]
  i1180.mixedBakeMode = i1181[33]
  i1180.environmentLightingMode = i1181[34]
  i1180.ambientProbe = new pc.SphericalHarmonicsL2(i1181[35])
  i1180.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1181[36])
  i1180.useReferenceAmbientProbe = !!i1181[37]
  request.r(i1181[38], i1181[39], 0, i1180, 'customReflection')
  request.r(i1181[40], i1181[41], 0, i1180, 'defaultReflection')
  i1180.defaultReflectionMode = i1181[42]
  i1180.defaultReflectionResolution = i1181[43]
  i1180.sunLightObjectId = i1181[44]
  i1180.pixelLightCount = i1181[45]
  i1180.defaultReflectionHDR = !!i1181[46]
  i1180.hasLightDataAsset = !!i1181[47]
  i1180.hasManualGenerate = !!i1181[48]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1187 = data
  request.r(i1187[0], i1187[1], 0, i1186, 'lightmapColor')
  request.r(i1187[2], i1187[3], 0, i1186, 'lightmapDirection')
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1188 = root || new UnityEngine.LightProbes()
  var i1189 = data
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1197 = data
  i1196.AdditionalLightsPerObjectLimit = i1197[0]
  i1196.AdditionalLightsRenderingMode = i1197[1]
  i1196.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1197[2], i1196.LightRenderingMode)
  i1196.ColorGradingLutSize = i1197[3]
  i1196.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1197[4], i1196.ColorGradingMode)
  i1196.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1197[5], i1196.MainLightRenderingMode)
  i1196.MainLightRenderingModeValue = i1197[6]
  i1196.SupportsMainLightShadows = !!i1197[7]
  i1196.MixedLightingSupported = !!i1197[8]
  i1196.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1197[9], i1196.MsaaQuality)
  i1196.MSAA = i1197[10]
  i1196.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1197[11], i1196.OpaqueDownsampling)
  i1196.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i1197[12], i1196.MainLightShadowmapResolution)
  i1196.MainLightShadowmapResolutionValue = i1197[13]
  i1196.SupportsSoftShadows = !!i1197[14]
  i1196.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i1197[15], i1196.SoftShadowQuality)
  i1196.SoftShadowQualityValue = i1197[16]
  i1196.ShadowDistance = i1197[17]
  i1196.ShadowCascadeCount = i1197[18]
  i1196.Cascade2Split = i1197[19]
  i1196.Cascade3Split = new pc.Vec2( i1197[20], i1197[21] )
  i1196.Cascade4Split = new pc.Vec3( i1197[22], i1197[23], i1197[24] )
  i1196.CascadeBorder = i1197[25]
  i1196.ShadowDepthBias = i1197[26]
  i1196.ShadowNormalBias = i1197[27]
  i1196.RenderScale = i1197[28]
  i1196.RequireDepthTexture = !!i1197[29]
  i1196.RequireOpaqueTexture = !!i1197[30]
  i1196.SupportsHDR = !!i1197[31]
  i1196.SupportsTerrainHoles = !!i1197[32]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1199 = data
  i1198.Disabled = i1199[0]
  i1198.PerVertex = i1199[1]
  i1198.PerPixel = i1199[2]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1201 = data
  i1200.LowDynamicRange = i1201[0]
  i1200.HighDynamicRange = i1201[1]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1203 = data
  i1202.Disabled = i1203[0]
  i1202._2x = i1203[1]
  i1202._4x = i1203[2]
  i1202._8x = i1203[3]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1205 = data
  i1204.None = i1205[0]
  i1204._2xBilinear = i1205[1]
  i1204._4xBox = i1205[2]
  i1204._4xBilinear = i1205[3]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i1207 = data
  i1206._256 = i1207[0]
  i1206._512 = i1207[1]
  i1206._1024 = i1207[2]
  i1206._2048 = i1207[3]
  i1206._4096 = i1207[4]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i1209 = data
  i1208.UsePipelineSettings = i1209[0]
  i1208.Low = i1209[1]
  i1208.Medium = i1209[2]
  i1208.High = i1209[3]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1211 = data
  var i1213 = i1211[0]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1213[i + 0]));
  }
  i1210.ShaderCompilationErrors = i1212
  i1210.name = i1211[1]
  i1210.guid = i1211[2]
  var i1215 = i1211[3]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( i1215[i + 0] );
  }
  i1210.shaderDefinedKeywords = i1214
  var i1217 = i1211[4]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1217[i + 0]) );
  }
  i1210.passes = i1216
  var i1219 = i1211[5]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1219[i + 0]) );
  }
  i1210.usePasses = i1218
  var i1221 = i1211[6]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1221[i + 0]) );
  }
  i1210.defaultParameterValues = i1220
  request.r(i1211[7], i1211[8], 0, i1210, 'unityFallbackShader')
  i1210.readDepth = !!i1211[9]
  i1210.isCreatedByShaderGraph = !!i1211[10]
  i1210.compiled = !!i1211[11]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1225 = data
  i1224.shaderName = i1225[0]
  i1224.errorMessage = i1225[1]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1230 = root || new pc.UnityShaderPass()
  var i1231 = data
  i1230.id = i1231[0]
  i1230.subShaderIndex = i1231[1]
  i1230.name = i1231[2]
  i1230.passType = i1231[3]
  i1230.grabPassTextureName = i1231[4]
  i1230.usePass = !!i1231[5]
  i1230.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[6], i1230.zTest)
  i1230.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[7], i1230.zWrite)
  i1230.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[8], i1230.culling)
  i1230.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1231[9], i1230.blending)
  i1230.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1231[10], i1230.alphaBlending)
  i1230.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[11], i1230.colorWriteMask)
  i1230.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[12], i1230.offsetUnits)
  i1230.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[13], i1230.offsetFactor)
  i1230.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[14], i1230.stencilRef)
  i1230.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[15], i1230.stencilReadMask)
  i1230.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1231[16], i1230.stencilWriteMask)
  i1230.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1231[17], i1230.stencilOp)
  i1230.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1231[18], i1230.stencilOpFront)
  i1230.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1231[19], i1230.stencilOpBack)
  var i1233 = i1231[20]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1233[i + 0]) );
  }
  i1230.tags = i1232
  var i1235 = i1231[21]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( i1235[i + 0] );
  }
  i1230.passDefinedKeywords = i1234
  var i1237 = i1231[22]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1237[i + 0]) );
  }
  i1230.passDefinedKeywordGroups = i1236
  var i1239 = i1231[23]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1239[i + 0]) );
  }
  i1230.variants = i1238
  var i1241 = i1231[24]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1241[i + 0]) );
  }
  i1230.excludedVariants = i1240
  i1230.hasDepthReader = !!i1231[25]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1243 = data
  i1242.val = i1243[0]
  i1242.name = i1243[1]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1245 = data
  i1244.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1245[0], i1244.src)
  i1244.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1245[1], i1244.dst)
  i1244.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1245[2], i1244.op)
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1247 = data
  i1246.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[0], i1246.pass)
  i1246.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[1], i1246.fail)
  i1246.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[2], i1246.zFail)
  i1246.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[3], i1246.comp)
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1251 = data
  i1250.name = i1251[0]
  i1250.value = i1251[1]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1255 = data
  var i1257 = i1255[0]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( i1257[i + 0] );
  }
  i1254.keywords = i1256
  i1254.hasDiscard = !!i1255[1]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1261 = data
  i1260.passId = i1261[0]
  i1260.subShaderIndex = i1261[1]
  var i1263 = i1261[2]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( i1263[i + 0] );
  }
  i1260.keywords = i1262
  i1260.vertexProgram = i1261[3]
  i1260.fragmentProgram = i1261[4]
  i1260.exportedForWebGl2 = !!i1261[5]
  i1260.readDepth = !!i1261[6]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1267 = data
  request.r(i1267[0], i1267[1], 0, i1266, 'shader')
  i1266.pass = i1267[2]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1271 = data
  i1270.name = i1271[0]
  i1270.type = i1271[1]
  i1270.value = new pc.Vec4( i1271[2], i1271[3], i1271[4], i1271[5] )
  i1270.textureValue = i1271[6]
  i1270.shaderPropertyFlag = i1271[7]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1273 = data
  i1272.name = i1273[0]
  request.r(i1273[1], i1273[2], 0, i1272, 'texture')
  i1272.aabb = i1273[3]
  i1272.vertices = i1273[4]
  i1272.triangles = i1273[5]
  i1272.textureRect = UnityEngine.Rect.MinMaxRect(i1273[6], i1273[7], i1273[8], i1273[9])
  i1272.packedRect = UnityEngine.Rect.MinMaxRect(i1273[10], i1273[11], i1273[12], i1273[13])
  i1272.border = new pc.Vec4( i1273[14], i1273[15], i1273[16], i1273[17] )
  i1272.transparency = i1273[18]
  i1272.bounds = i1273[19]
  i1272.pixelsPerUnit = i1273[20]
  i1272.textureWidth = i1273[21]
  i1272.textureHeight = i1273[22]
  i1272.nativeSize = new pc.Vec2( i1273[23], i1273[24] )
  i1272.pivot = new pc.Vec2( i1273[25], i1273[26] )
  i1272.textureRectOffset = new pc.Vec2( i1273[27], i1273[28] )
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1275 = data
  i1274.name = i1275[0]
  return i1274
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1276 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1277 = data
  var i1279 = i1277[0]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1279.length; i += 2) {
  request.r(i1279[i + 0], i1279[i + 1], 1, i1278, '')
  }
  i1276.components = i1278
  return i1276
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1282 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1283 = data
  i1282.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1283[0], i1282.mode)
  i1282.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1283[1], i1282.neutralHDRRangeReductionMode)
  i1282.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1283[2], i1282.acesPreset)
  i1282.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1283[3], i1282.hueShiftAmount)
  i1282.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1283[4], i1282.detectPaperWhite)
  i1282.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1283[5], i1282.paperWhite)
  i1282.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1283[6], i1282.detectBrightnessLimits)
  i1282.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1283[7], i1282.minNits)
  i1282.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1283[8], i1282.maxNits)
  i1282.active = !!i1283[9]
  return i1282
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1284 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1285 = data
  i1284.m_Value = i1285[0]
  i1284.m_OverrideState = !!i1285[1]
  return i1284
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1287 = data
  i1286.m_Value = i1287[0]
  i1286.m_OverrideState = !!i1287[1]
  return i1286
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1289 = data
  i1288.m_Value = i1289[0]
  i1288.m_OverrideState = !!i1289[1]
  return i1288
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1291 = data
  i1290.m_Value = i1291[0]
  i1290.m_OverrideState = !!i1291[1]
  return i1290
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1293 = data
  i1292.m_Value = !!i1293[0]
  i1292.m_OverrideState = !!i1293[1]
  return i1292
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1295 = data
  i1294.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1295[0], i1294.skipIterations)
  i1294.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1295[1], i1294.threshold)
  i1294.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1295[2], i1294.intensity)
  i1294.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1295[3], i1294.scatter)
  i1294.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1295[4], i1294.clamp)
  i1294.tint = request.d('UnityEngine.Rendering.ColorParameter', i1295[5], i1294.tint)
  i1294.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1295[6], i1294.highQualityFiltering)
  i1294.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1295[7], i1294.downscale)
  i1294.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1295[8], i1294.maxIterations)
  i1294.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1295[9], i1294.dirtTexture)
  i1294.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1295[10], i1294.dirtIntensity)
  i1294.active = !!i1295[11]
  return i1294
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1297 = data
  i1296.m_Value = i1297[0]
  i1296.m_OverrideState = !!i1297[1]
  return i1296
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1299 = data
  i1298.m_Value = i1299[0]
  i1298.m_OverrideState = !!i1299[1]
  return i1298
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1300 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1301 = data
  i1300.m_Value = new pc.Color(i1301[0], i1301[1], i1301[2], i1301[3])
  i1300.m_OverrideState = !!i1301[4]
  return i1300
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1303 = data
  i1302.m_Value = i1303[0]
  i1302.m_OverrideState = !!i1303[1]
  return i1302
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1304 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1305 = data
  i1304.dimension = i1305[0]
  request.r(i1305[1], i1305[2], 0, i1304, 'm_Value')
  i1304.m_OverrideState = !!i1305[3]
  return i1304
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1306 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1307 = data
  i1306.color = request.d('UnityEngine.Rendering.ColorParameter', i1307[0], i1306.color)
  i1306.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1307[1], i1306.center)
  i1306.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1307[2], i1306.intensity)
  i1306.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1307[3], i1306.smoothness)
  i1306.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1307[4], i1306.rounded)
  i1306.active = !!i1307[5]
  return i1306
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1308 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1309 = data
  i1308.m_Value = new pc.Vec2( i1309[0], i1309[1] )
  i1308.m_OverrideState = !!i1309[2]
  return i1308
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1310 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1311 = data
  i1310.useSafeMode = !!i1311[0]
  i1310.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1311[1], i1310.safeModeOptions)
  i1310.timeScale = i1311[2]
  i1310.unscaledTimeScale = i1311[3]
  i1310.useSmoothDeltaTime = !!i1311[4]
  i1310.maxSmoothUnscaledTime = i1311[5]
  i1310.rewindCallbackMode = i1311[6]
  i1310.showUnityEditorReport = !!i1311[7]
  i1310.logBehaviour = i1311[8]
  i1310.drawGizmos = !!i1311[9]
  i1310.defaultRecyclable = !!i1311[10]
  i1310.defaultAutoPlay = i1311[11]
  i1310.defaultUpdateType = i1311[12]
  i1310.defaultTimeScaleIndependent = !!i1311[13]
  i1310.defaultEaseType = i1311[14]
  i1310.defaultEaseOvershootOrAmplitude = i1311[15]
  i1310.defaultEasePeriod = i1311[16]
  i1310.defaultAutoKill = !!i1311[17]
  i1310.defaultLoopType = i1311[18]
  i1310.debugMode = !!i1311[19]
  i1310.debugStoreTargetId = !!i1311[20]
  i1310.showPreviewPanel = !!i1311[21]
  i1310.storeSettingsLocation = i1311[22]
  i1310.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1311[23], i1310.modules)
  i1310.createASMDEF = !!i1311[24]
  i1310.showPlayingTweens = !!i1311[25]
  i1310.showPausedTweens = !!i1311[26]
  return i1310
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1312 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1313 = data
  i1312.logBehaviour = i1313[0]
  i1312.nestedTweenFailureBehaviour = i1313[1]
  return i1312
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1314 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1315 = data
  i1314.showPanel = !!i1315[0]
  i1314.audioEnabled = !!i1315[1]
  i1314.physicsEnabled = !!i1315[2]
  i1314.physics2DEnabled = !!i1315[3]
  i1314.spriteEnabled = !!i1315[4]
  i1314.uiEnabled = !!i1315[5]
  i1314.textMeshProEnabled = !!i1315[6]
  i1314.tk2DEnabled = !!i1315[7]
  i1314.deAudioEnabled = !!i1315[8]
  i1314.deUnityExtendedEnabled = !!i1315[9]
  i1314.epoOutlineEnabled = !!i1315[10]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1317 = data
  var i1319 = i1317[0]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1319[i + 0]) );
  }
  i1316.files = i1318
  i1316.componentToPrefabIds = i1317[1]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1323 = data
  i1322.path = i1323[0]
  request.r(i1323[1], i1323[2], 0, i1322, 'unityObject')
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1325 = data
  var i1327 = i1325[0]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1327[i + 0]) );
  }
  i1324.scriptsExecutionOrder = i1326
  var i1329 = i1325[1]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1329[i + 0]) );
  }
  i1324.sortingLayers = i1328
  var i1331 = i1325[2]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1331[i + 0]) );
  }
  i1324.cullingLayers = i1330
  i1324.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1325[3], i1324.timeSettings)
  i1324.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1325[4], i1324.physicsSettings)
  i1324.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1325[5], i1324.physics2DSettings)
  i1324.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1325[6], i1324.qualitySettings)
  i1324.enableRealtimeShadows = !!i1325[7]
  i1324.enableAutoInstancing = !!i1325[8]
  i1324.enableDynamicBatching = !!i1325[9]
  i1324.lightmapEncodingQuality = i1325[10]
  i1324.desiredColorSpace = i1325[11]
  var i1333 = i1325[12]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( i1333[i + 0] );
  }
  i1324.allTags = i1332
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1337 = data
  i1336.name = i1337[0]
  i1336.value = i1337[1]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1341 = data
  i1340.id = i1341[0]
  i1340.name = i1341[1]
  i1340.value = i1341[2]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1345 = data
  i1344.id = i1345[0]
  i1344.name = i1345[1]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1347 = data
  i1346.fixedDeltaTime = i1347[0]
  i1346.maximumDeltaTime = i1347[1]
  i1346.timeScale = i1347[2]
  i1346.maximumParticleTimestep = i1347[3]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1349 = data
  i1348.gravity = new pc.Vec3( i1349[0], i1349[1], i1349[2] )
  i1348.defaultSolverIterations = i1349[3]
  i1348.bounceThreshold = i1349[4]
  i1348.autoSyncTransforms = !!i1349[5]
  i1348.autoSimulation = !!i1349[6]
  var i1351 = i1349[7]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1351[i + 0]) );
  }
  i1348.collisionMatrix = i1350
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1355 = data
  i1354.enabled = !!i1355[0]
  i1354.layerId = i1355[1]
  i1354.otherLayerId = i1355[2]
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1357 = data
  request.r(i1357[0], i1357[1], 0, i1356, 'material')
  i1356.gravity = new pc.Vec2( i1357[2], i1357[3] )
  i1356.positionIterations = i1357[4]
  i1356.velocityIterations = i1357[5]
  i1356.velocityThreshold = i1357[6]
  i1356.maxLinearCorrection = i1357[7]
  i1356.maxAngularCorrection = i1357[8]
  i1356.maxTranslationSpeed = i1357[9]
  i1356.maxRotationSpeed = i1357[10]
  i1356.baumgarteScale = i1357[11]
  i1356.baumgarteTOIScale = i1357[12]
  i1356.timeToSleep = i1357[13]
  i1356.linearSleepTolerance = i1357[14]
  i1356.angularSleepTolerance = i1357[15]
  i1356.defaultContactOffset = i1357[16]
  i1356.autoSimulation = !!i1357[17]
  i1356.queriesHitTriggers = !!i1357[18]
  i1356.queriesStartInColliders = !!i1357[19]
  i1356.callbacksOnDisable = !!i1357[20]
  i1356.reuseCollisionCallbacks = !!i1357[21]
  i1356.autoSyncTransforms = !!i1357[22]
  var i1359 = i1357[23]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1359[i + 0]) );
  }
  i1356.collisionMatrix = i1358
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1363 = data
  i1362.enabled = !!i1363[0]
  i1362.layerId = i1363[1]
  i1362.otherLayerId = i1363[2]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1365 = data
  var i1367 = i1365[0]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1367[i + 0]) );
  }
  i1364.qualityLevels = i1366
  var i1369 = i1365[1]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( i1369[i + 0] );
  }
  i1364.names = i1368
  i1364.shadows = i1365[2]
  i1364.anisotropicFiltering = i1365[3]
  i1364.antiAliasing = i1365[4]
  i1364.lodBias = i1365[5]
  i1364.shadowCascades = i1365[6]
  i1364.shadowDistance = i1365[7]
  i1364.shadowmaskMode = i1365[8]
  i1364.shadowProjection = i1365[9]
  i1364.shadowResolution = i1365[10]
  i1364.softParticles = !!i1365[11]
  i1364.softVegetation = !!i1365[12]
  i1364.activeColorSpace = i1365[13]
  i1364.desiredColorSpace = i1365[14]
  i1364.masterTextureLimit = i1365[15]
  i1364.maxQueuedFrames = i1365[16]
  i1364.particleRaycastBudget = i1365[17]
  i1364.pixelLightCount = i1365[18]
  i1364.realtimeReflectionProbes = !!i1365[19]
  i1364.shadowCascade2Split = i1365[20]
  i1364.shadowCascade4Split = new pc.Vec3( i1365[21], i1365[22], i1365[23] )
  i1364.streamingMipmapsActive = !!i1365[24]
  i1364.vSyncCount = i1365[25]
  i1364.asyncUploadBufferSize = i1365[26]
  i1364.asyncUploadTimeSlice = i1365[27]
  i1364.billboardsFaceCameraPosition = !!i1365[28]
  i1364.shadowNearPlaneOffset = i1365[29]
  i1364.streamingMipmapsMemoryBudget = i1365[30]
  i1364.maximumLODLevel = i1365[31]
  i1364.streamingMipmapsAddAllCameras = !!i1365[32]
  i1364.streamingMipmapsMaxLevelReduction = i1365[33]
  i1364.streamingMipmapsRenderersPerFrame = i1365[34]
  i1364.resolutionScalingFixedDPIFactor = i1365[35]
  i1364.streamingMipmapsMaxFileIORequests = i1365[36]
  i1364.currentQualityLevel = i1365[37]
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1375 = data
  i1374.weight = i1375[0]
  i1374.vertices = i1375[1]
  i1374.normals = i1375[2]
  i1374.tangents = i1375[3]
  return i1374
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

Deserializers.buildID = "c22d951e-d599-4f7a-a595-b5bfa55d594b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

