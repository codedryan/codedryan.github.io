const e="主键ID",t="归属敏感词包ID",o="敏感词内容",i="敏感词描述",n="状态",s="部门ID",c="租户ID",d="创建时间",r="创建者ID",l="修改时间",a="修改者ID",I="文件地址",v={sensitiveWord:`请一行输入一个敏感词，示例：
赌博
色情
暴力
诈骗`},g={cloudBasedAIFiltering:"云端AI过滤",enableAIFilter:"启用AI过滤",cloudFilteringServiceProvider:"云过滤服务商",cloudFilteringServiceProviderAliDesc:"阿里云请参考 ",cloudFilteringServiceProviderTencentDesc:"腾讯云请参考 "},u={sensitiveWord:"敏感词库",triggerLog:"触发日志查询",wordCloud:"敏感词分布分析",sensitiveWordConfig:"敏感词配置",sensitiveWhiteWord:"敏感词白名单"},D={id:e,packageId:t,sensitiveWord:o,wordDesc:i,status:n,deptId:s,tenantId:c,created:d,createdBy:r,modified:l,modifiedBy:a,fileUrl:I,placeholder:v,label:g,menus:u};export{d as created,r as createdBy,D as default,s as deptId,I as fileUrl,e as id,g as label,u as menus,l as modified,a as modifiedBy,t as packageId,v as placeholder,o as sensitiveWord,n as status,c as tenantId,i as wordDesc};
