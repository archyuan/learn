package Main.tranning;

import org.omg.PortableInterceptor.SYSTEM_EXCEPTION;

import java.util.Arrays;
import java.util.Scanner;

public class Sort {

    public static void main(String args[]){

        int[] a = new int[5];
        Scanner sc = new Scanner(System.in);
        System.out.println("input five number");
        for (int i=0;i<5;i++){
            if (sc.hasNextInt()){
                a[i] = sc.nextInt();
            }
        }

        for (int i=0;i<5;i++)
            System.out.print(a[i]+",");
        System.out.println();
        System.out.println("after");
        Arrays.sort(a);

        for (int i=0;i<5;i++)
            System.out.print(a[i]+",");

    }
}
