module.exports = function SpamBlock(dispatch){
	let previous = null;
	dispatch.hook('S_SYSTEM_MESSAGE', 1, (event) => {
		if(event.message === previous){
			return false
		}
		if(event.message.length < 6){
			previous = event.message
		}
	});
}