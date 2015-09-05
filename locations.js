// LOCATIONS
$("body").contents().each(function () {
    if (this.nodeType === 3) this.nodeValue = $.trim($(this).text()).replace(/Trump/g, "Joffrey")
    if (this.nodeType === 1) $(this).html( $(this).html().replace(/Trump/g, "Joffrey") )
})
