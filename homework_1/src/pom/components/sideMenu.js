class SideMenu {
    accountAndVisibility () {
        return $('//a[@data-testid="account-menu-profile"]').click()
    }
}

export const sideMenu = new SideMenu()