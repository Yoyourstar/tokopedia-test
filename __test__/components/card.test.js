import dataMock from "@/__mocks__/dataMock"
import { Card } from "@/components/ui/card"
import { render , screen } from "@testing-library/react" 

describe("Card component", () => {
    it("[+] testing render card", () => {
        const item = dataMock.dataProfile
        render(<Card 
            name = {item.name}
            number = {item.number}
            Saldo = {item.Saldo}
            imgAvatar = {item.imgAvatar}
            />)
            
        const name = dataMock.dataProfile.name
        const number = dataMock.dataProfile.number
        const Saldo = dataMock.dataProfile.Saldo
        const imgAvatar = dataMock.dataProfile.imgAvatar
        
        expect(name).toBe("aulia")
        expect(number).toBe("628567446106")
        expect(Saldo).toBe("Saldo Rp0")
        expect(imgAvatar).toBe("/avatars/01.png")

    })
})