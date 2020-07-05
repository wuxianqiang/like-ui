
node {
    stage('checkout') {
        git 'git@github.com:wuxianqiang/like-ui.git'
    }
    stage('build') {
        nodejs('nodejs13'){
            sh 'yarn install'
            sh 'yarn docs:build'
        }
    }
    stage('deploy') {
        sh 'cp -rf ${WORKSPACE}/docs/.vuepress/dist/* /usr/share/nginx/html'
        sh 'nginx -s reload'
    }
}
