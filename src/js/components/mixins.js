const MixinLog = {
    componentDidMount(){
      console.log("MixinLog - componentDidMount");
    },
    log(){
        console.log(">>> 开始打印日志 <<<");
    }
};
export default MixinLog