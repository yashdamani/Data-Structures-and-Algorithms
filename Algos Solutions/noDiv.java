import java.io.*;
import java.util.*;

public class noDiv {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter first number: ");
        String number1 = br.readLine();
        System.out.println("Enter second number: ");
        String number2 = br.readLine();
        Double num1 = Double.parseDouble(number1);
        Double num2 = Double.parseDouble(number2);
        double q1 = 0.0;
        double q2 = -1.0;
        double temp = 0.0;
        temp = num2 / 10;
        while(num1 >= 0) {
            num1 -= temp;
            q2++;
        }
        System.out.println(q1 + (q2/10));
    }
}
 