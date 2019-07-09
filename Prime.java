package Main.tranning;

public class Prime {

    public static int count=0;

    public static void isPrime(int x){
        boolean isPrime = true;

        for( int i = 2; i< x; i++)
        {
            if(x % i ==0)
            {
                isPrime = false;
                break;
            }
        }
        if( isPrime)
        {
            ++count;
            System.out.println(x +"是素数");

        }
        else
        {
            System.out.println(x+ "不是素数");
        }

    }

    public static void main(String args[]){

        for (int i = 101;i<301;i++){
            isPrime(i);
        }
        System.out.println("共有"+count+"个素数 ");
    }
}
