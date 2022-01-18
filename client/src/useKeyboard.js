export default function keyboard(node, params) {
	// params.shortcut
	function handleKeyDown(e) {
		Object.keys(params.shortcut)
			.forEach(key => {
			  if (e.code === key) {
					if (Array.isArray(params.shortcut[key])) {
						params.shortcut[key].forEach(fn => fn(e));
					} else {
						params.shortcut[key](e);
					}
				} 
		  })
	}
	
	node.addEventListener('keydown', handleKeyDown);
	
	return {
		destroy() {
			node.removeEventListener('keydown', handleKeyDown);
		}
	}
}