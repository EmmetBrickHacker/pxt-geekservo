namespace geekservo {
   // *************************************************** ELECFREAKS's ports ****************************************** //
    /** 
     * I2C adresses links to wuKong board
    */
    const board_address = 0x10

    /** 
     * List of aviable ports for servos
    */
   export enum ElecFreaksPins {
        //% block="S0" enumval=0
        S0,
        //% block="S1" enumval=1
        S1,
        //% block="S2" enumval=2
        S2,
        //% block="S3" enumval=3
        S3,
        //% block="S4" enumval=4
        S4,
        //% block="S5" enumval=5
        S5,
        //% block="S6" enumval=6
        S6,
        //% block="S7" enumval=7
        S7
    }
   // *************************************************** [SUBCATEGORY] ELECFREAKS ****************************************** //
    /**
     * Setting the power and direction of a continuous Geekservo (usualy has lime color). 
     * @param servo A port of servo in the ElecFreaksPins , eg: ElecFreaksPins.S0
     * @param power [-100-100] power of continuous Geekservo , eg: 100
    */
    
    //% block="continuous Geekservo 9g 360° $servo run at $power\\%"
    //% power.shadow="speedPicker"
    //% power.defl=100
    //% subcategory="ELECFREAKS"
    //% weight=100 color="#00cc00"
    export function geekServo360continuous(servo: ElecFreaksPins, power: number) {
        let buf = pins.createBuffer(4);
        if (servo == 0) {
            buf[0] = 0x03;
        }
        if (servo == 1) {
            buf[0] = 0x04;
        }
        if (servo == 2) {
            buf[0] = 0x05;
        }
        if (servo == 3) {
            buf[0] = 0x06;
        }
        if (servo == 4) {
            buf[0] = 0x07;
        }
        if (servo == 5) {
            buf[0] = 0x08;
        }
        if (servo == 6) {
            buf[0] = 0x09;
        }
        if (servo == 7) {
            buf[0] = 0x10;
        }
        buf[1] = Math.map(power, -100, 100, 0, 180);
        buf[2] = 0;
        buf[3] = 0;
        pins.i2cWriteBuffer(board_address, buf);
    }

    /**
     * Setting the angle of a Geekservo (usualy has grey color). 
     * @param servo A  port of servo in the ElecFreaksPins , eg: ElecFreaksPins.S0
     * @param angle[0-270] Angle of Geekservo , eg: 135
    */
    //% block="Geekservo 9g 270° $servo set to $angle\\°"
    //% angle.min=0 angle.max=270
    //% angle.defl=135
    //% subcategory="ELECFREAKS"
    //% weight=60 color="#999999"
    export function geekServo270(servo: ElecFreaksPins, angle: number) {
        let buf = pins.createBuffer(4);
        if (servo == 0) {
            buf[0] = 0x03;
        }
        if (servo == 1) {
            buf[0] = 0x04;
        }
        if (servo == 2) {
            buf[0] = 0x05;
        }
        if (servo == 3) {
            buf[0] = 0x06;
        }
        if (servo == 4) {
            buf[0] = 0x07;
        }
        if (servo == 5) {
            buf[0] = 0x08;
        }
        if (servo == 6) {
            buf[0] = 0x09;
        }
        if (servo == 7) {
            buf[0] = 0x10;
        }
        buf[1] = Math.map(angle, 0, 270, 0, 180);
        buf[2] = 0;
        buf[3] = 0;
        pins.i2cWriteBuffer(board_address, buf);
    }

    /**
     * Setting the angle of a dual shaft Geekservo (usualy has grey color). 
     * @param servo A  port of servo in the ElecFreaksPins , eg: ElecFreaksPins.S0
     * @param angle[0-360] Angle of Geekservo , eg: 180
    */
    //% block="Geekservo Dual Shaft 2kg 360° $servo set to $angle\\°"
    //% angle.min=0 angle.max=360
    //% angle.defl=180
    //% subcategory="ELECFREAKS"
    //% weight=55 color="#999999"
    export function geekServo360(servo: ElecFreaksPins, angle: number) {
        let buf = pins.createBuffer(4);
        if (servo == 0) {
            buf[0] = 0x03;
        }
        if (servo == 1) {
            buf[0] = 0x04;
        }
        if (servo == 2) {
            buf[0] = 0x05;
        }
        if (servo == 3) {
            buf[0] = 0x06;
        }
        if (servo == 4) {
            buf[0] = 0x07;
        }
        if (servo == 5) {
            buf[0] = 0x08;
        }
        if (servo == 6) {
            buf[0] = 0x09;
        }
        if (servo == 7) {
            buf[0] = 0x10;
        }
        buf[1] = Math.map(angle, 0, 360, 0, 180);
        buf[2] = 0;
        buf[3] = 0;
        pins.i2cWriteBuffer(board_address, buf);
    }
 }