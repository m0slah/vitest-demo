import { screen, render } from '@testing-library/vue';
import {describe, it, expect, vi} from "vitest";
import View from "../View.vue";

describe("View",()=>{
    const viewText="hello from inside the view";

    it("render span correctly",async ()=>{
        const viewId="viewId";
        render(View,{
            props:{element:"span",id:viewId},
            slots:{default:viewText},
        })

        const view=await screen.findByText(viewText);

        expect(view.id).toBe(viewId);
        expect(view.innerHTML).toBe(viewText);
        expect(view.nodeName).toBe("SPAN");
    })
})