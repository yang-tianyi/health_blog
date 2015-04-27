function switchTabs(event) {
	event.preventDefault;
	var list = document.querySelector('#header ul');
	var selectedTab = list.querySelector('li#selected');
	var elem = event.target;
	var name = elem.tagName;
	// debugger
	if (name == 'A') {
		selectedTab.removeAttribute('id');
		elem.parentNode.setAttribute("id", "selected");
		showContent(elem)
	}
}

function showContent(elem) {
	// debugger
	var oldBody = document.querySelector("div[class='active']")
	var contentId = elem.id
	var newBody = document.querySelector('[data-country=' + contentId + ']')
	oldBody.setAttribute('class', 'inactive')
	newBody.setAttribute('class', 'active')
	// debugger
}
