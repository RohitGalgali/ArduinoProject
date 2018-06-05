/*
  AnalogReadSerial

  Reads an analog input on pin 0, prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/AnalogReadSerial
*/

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  pinMode(13,OUTPUT); //OnBoard LED
}

// the loop routine runs over and over again forever:
void loop() {

  if(Serial.available()>0)
  {
    int val = Serial.read();
    if(val == 'H')
    {
      Serial.print('H');
      digitalWrite(13,HIGH);
      }
    else if(val == 'L')
    {
      Serial.print('L');
      digitalWrite(13,LOW);
      }
    }
}
