// 各个菜单详细路由

export default [{
        path: "/",
        // redirect: "/Home/SupplementaryMaterials"
        redirect: "Homepage"
    },
    //首页
    // ==================>>>>>
    {
        path: "Homepage",
        name: "Homepage",
        component: resolve =>
            require(["../../components/page/Homepage.vue"], resolve),
        meta:{title:'首页'}
    }, 

    // IT规划
    {
        path: "ITPlanning",
        name: "ITPlanning",
        component: resolve =>
            require(["../../components/common/routerView"], resolve),
        meta:{title:'IT规划'},
        redirect:'ITPlanning/index',
        children:[
            {
                path: "index",
                name: "ITPlanningIndex",
                component: resolve =>
                    require(["../../components/page/ITPlanning/index.vue"], resolve),
                meta:{title:''}
            }, 
        ]
    }, 
    
    // 项目门控
    {
        path: "ProjectGatewayControl",
        name: "ProjectGatewayControl",
        component: resolve =>
            require(["../../components/common/routerView"], resolve),
        meta:{title:'项目门控'},
        redirect:'ProjectGatewayControl/index',
        children:[
            {
                path: "index",
                name: "ProjectGatewayControlIndex",
                component: resolve =>
                    require(["../../components/page/ProjectGatewayControl/index.vue"], resolve),
                meta:{title:''}
            }, 
        ]
    }, 
    
    // 项目示险
    {
        path: "ProjectRiskIndication",
        name: "ProjectRiskIndication",
        component: resolve =>
            require(["../../components/common/routerView"], resolve),
        meta:{title:'项目示险'},
        redirect:'ProjectRiskIndication/index',
        children:[
            {
                path: "index",
                name: "ProjectRiskIndicationIndex",
                component: resolve =>
                    require(["../../components/page/ProjectRiskIndication/index.vue"], resolve),
                meta:{title:''}
            }, 
        ]
    },  

    // 项目台账
    {
        path: "ProjectAccount",
        name: "ProjectAccount",
        component: resolve =>
            require(["../../components/common/routerView"], resolve),
        meta:{title:'项目台账'},
        redirect:'ProjectAccount/index',
        children:[
            {
                path: "index",
                name: "ProjectAccountIndex",
                component: resolve =>
                    require(["../../components/page/ProjectAccount/index.vue"], resolve),
                meta:{title:''}
            }, 
        ]
    },  

    // 数据网关
    {
        path: "DataGateway",
        name: "DataGateway",
        component: resolve =>
            require(["../../components/common/routerView"], resolve),
        meta:{title:'数据网关'},
        redirect:'DataGateway/index',
        children:[
            {
                path: "index",
                name: "DataGatewayIndex",
                component: resolve =>
                    require(["../../components/page/DataGateway/index.vue"], resolve),
                meta:{title:''}
            }, 
        ]
    },  

    // 系统管理
    {
        path: "SystemManagement",
        name: "SystemManagement",
        component: resolve =>
            require(["../../components/common/routerView"], resolve),
        meta:{title:'系统管理'},
        redirect:'SystemManagement/TaskListManagement',
        children:[
            {
                path: "index",
                name: "SystemManagementIndex",
                component: resolve =>
                    require(["../../components/page/SystemManagement/index.vue"], resolve),
                meta:{title:''}
            }, 
        ]
    },  
    
]