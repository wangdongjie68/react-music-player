import React from 'react';
import Header from './components/header'
import Progress from './components/progress'

let Root = React.createClass({
    getInitialState(){
        return{
            progress: '-'
        }
    },

    componentDidMount(){
        $('#player').jPlayer({
            ready: function(){
                $(this).jPlayer('setMedia',{
                    mp3:'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
                }).jPlayer('play');
            },
            supplied: 'mp3',
            wmode: 'window',
            volume: '.01'
        },
    );
        $('#player').bind($.jPlayer.event.timeupdate,(e)=>{
            this.setState({
                progress: e.jPlayer.status.currentPercentAbsolute
            });
        });
    },
    componentWillUnmount(){
        $('#jPlayer').unbind($.jPlayer.event.timeupdate);
    },

    render(){
        return(
            <div>
            <Header />
            <Progress progress={this.state.progress}>
            </Progress>
            </div>
        );
    }
});

export default Root;