/*
Product Name: dhtmlxSuite 
Version: 5.2.0 
Edition: Professional 
License: content of this file is covered by DHTMLX Commercial or Enterprise license. Usage without proper license is prohibited. To obtain it contact sales@dhtmlx.com
Copyright UAB Dinamenta http://www.dhtmlx.com
*/

dhtmlXLayoutObject.prototype.listViews = function() {
	return this.listPatterns();
};
dhtmlXLayoutObject.prototype.setEffect = function() {
	// no longer used
};
dhtmlXLayoutObject.prototype.getEffect = function() {
	// no longer used
};
dhtmlXLayoutObject.prototype.dockWindow = function(id) {
	this.cells(id).dock();
}
dhtmlXLayoutObject.prototype.unDockWindow = function(id) {
	this.cells(id).undock();
}

dhtmlXLayoutObject.prototype.setCollapsedText = function(id, text) {
	this.cells(id).setCollapsedText(text);
};
dhtmlXLayoutObject.prototype.getIdByIndex = function(index) {
	if (index < 0 || index > this.items.length-1) return null;
	var id = null;
	this.forEachItem(function(cell){
		if (id == null && cell == this.items[index]) id = cell.conf.name;
	});
	return id;
};
dhtmlXLayoutObject.prototype.getIndexById = function(id) {
	var cell = this.cells(id);
	var index = -1;
	for (var q=0; q<this.items.length; q++) {
		if (cell == this.items[q]) index = q;
	}
	return index;
};
dhtmlXLayoutObject.prototype.showPanel = function(id) {
	this.cells(id).showHeader();
};
dhtmlXLayoutObject.prototype.hidePanel = function(id){
	this.cells(id).hideHeader();
};
dhtmlXLayoutObject.prototype.isPanelVisible = function(id) {
	return this.cells(id).isHeaderVisible();
};
dhtmlXLayoutObject.prototype.setImagePath = function() {
	// no longer used
};

dhtmlXLayoutCell.prototype.getIndex = function() {
	return this.conf.index; // ?? deprecated
};


