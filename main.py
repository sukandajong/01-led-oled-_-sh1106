# 60 คือค่า decimal ของ 0x3C
OLED12864_I2C.init(60)

def on_forever():
    if input.button_is_pressed(Button.A):
        basic.show_icon(IconNames.HAPPY)
        OLED12864_I2C.clear()
        # เปลี่ยนจากการเขียนแบบบรรทัดเดียว เป็นการระบุตำแหน่ง x, y
        OLED12864_I2C.show_string(0, 0, "HELLO", 1)
    elif input.button_is_pressed(Button.B):
        basic.show_icon(IconNames.SAD)
        OLED12864_I2C.clear()
        OLED12864_I2C.show_string(0, 0, "BYE", 1)
    
    basic.pause(100)

basic.forever(on_forever)