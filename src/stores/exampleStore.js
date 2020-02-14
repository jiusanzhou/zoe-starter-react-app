// app storage
import { observable, action, computed } from 'mobx'

const mockApps =  [
    { name: 'projects', icon: "applications", title: "项目管理" },
    { name: 'scm', icon: "code", title: "代码仓库" },
    { name: 'ci', icon: "resolve", title: "持续集成" },
    { name: 'artifacts', icon: "code-block", title: "物料仓库" },
    { name: 'testing', icon: "cube", title: "自动化测试" },
    { name: 'cd', icon: "globe", title: "持续部署" },
    { name: 'dev', icon: "annotation", title: "开发环境" },
]

export class AppStore {
    @observable isLoading = false
    // we store app at here with id
    // TODO: with version prefix
    @observable appsRegistry = observable.map()
    @observable currentAppID = null

    @observable count = 0;

    @computed get apps() {
        // FIXME:
        return Array.from(this.appsRegistry.values())
    }

    @computed get currentApp() {
        return this.currentAppID
            ?{...this.appsRegistry.get(this.currentAppID)}
            :{ icon: "grid-view", title: "DevOps" }
    }

    // set current app from router
    @action setCurrentApp(id) {
        this.currentAppID = id
    }

    @action loadApps() {
        this.isLoading = true

        this.appsRegistry.clear()

        // loads apps from server
        // store app at here or we need to extact some things like settings and routers?

        // store in registry, if then need call action
        mockApps.forEach(item => this.appsRegistry.set(item.name, {id: item.name, text: item.title, ...item}))

        this.isLoading = false
    }

    @action addCount() {
        this.count++
    }
}

export default new AppStore()