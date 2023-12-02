import dataMock from "@/__mocks__/dataMock";
import Home from "@/app/(service)/page";
import { render , screen } from "@testing-library/react";

describe("Home", () => {
    
    it("[+] Home render", () => {
        render(<Home/>)
        const paragraf = screen.getByRole("heading", {
            name : dataMock.page.paragraf
        });

       expect(paragraf).toBeInTheDocument();
    })

    it("[-] Home render", () => {
        render(<Home/>)
        const paragraf = screen.getByRole("heading", {
            name : dataMock.page.paragraf
        });

       expect(paragraf.textContent).not.toBe("tidak ada content");
    })

    it("[+] Button render", () => {
        render(<Home/>)
        const button = screen.getByRole("button", {
            name : dataMock.page.button
        });

        expect(button).toBeInTheDocument();
    })

    it("[-] Button render", () => {
        render(<Home/>)
        const button = screen.getByRole("button", {
            name : dataMock.page.button
        });

        expect(button.textContent).not.toBe("button seharusnya tidak ada");
    })
})