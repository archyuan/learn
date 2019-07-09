package Main.tranning;

import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

public class Containsame {

    public static boolean isContains(Character c,Map<Character,Integer> s){
        for (Character cc : s.keySet()){
            if (cc.equals(c))
                return true;
        }
        return false;
    }
    public static void main(String args[]){

        String sa="defddcsdfefWSASDCSDcdfcsdvcsfcsdgvmfjdvbsdcnldnucsfdvsdcsdlknvc";
        Map<Character, Integer> s = new TreeMap<>();
        for (int i = 0;i<sa.length();i++){
            System.out.println(sa.charAt(i));
             Character f = sa.charAt(i);
             if (!isContains(f,s)){
                 s.put(sa.charAt(i),1);

             }else {
                 int d = s.get(f);
                 s.put(f, ++d);
             }
        }

        System.out.println("------------------------");
        for (Character c : s.keySet()){

            if (s.get(c)>1){
                System.out.println("重复的字符有"+c+" 重复"+s.get(c)+"次");
            }
        }

    }
}
