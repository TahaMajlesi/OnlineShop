$(document).ready(function() {

    $("#HeaderSettingsBtn , #MobileSettingsBtn").click(function() {
        $("#SettingsWindow").fadeToggle(70); // Toggle with fade effect over 500 milliseconds
    });
    $("#close-settings-btn").click(function() {
        $("#SettingsWindow").fadeToggle(70);
    })
})