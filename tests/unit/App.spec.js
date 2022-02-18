import App from "@/App";
import {mount} from "@vue/test-utils";

describe('App vue', function () {
    const wrapper = mount(App);
    it('should show a welcome page', function () {
        const welcomeText = wrapper.find("#welcome-text");

        expect(welcomeText.exists).toBeTruthy();
        expect(welcomeText.text()).toEqual("Welcome to AniGa's wedding page!")
    });
});