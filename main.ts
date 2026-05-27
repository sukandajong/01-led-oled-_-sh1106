// 60 คือค่า decimal ของ 0x3C
OLED12864_I2C.init(60)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        OLED12864_I2C.clear()
        // เปลี่ยนจากการเขียนแบบบรรทัดเดียว เป็นการระบุตำแหน่ง x, y
        OLED12864_I2C.showString(
        0,
        0,
        "HELLO",
        1
        )
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Sad)
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        0,
        0,
        "BYE",
        1
        )
    }
    basic.pause(100)
})
