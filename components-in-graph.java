import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

class Element{
    int elementId;
    int setId;
}

class Set{
    int setId;
    HashSet<Integer> sets;
}

public class Solution {
  Element [] elements;
  Set []sets;
  void input(){
    Scanner sin = new Scanner(System.in);
    int N = sin.nextInt();
    elements = new Element[2*N];
    sets = new Set[2*N];
    for(int i = 1; i <= 2*N; i++){
      Element e = new Element();
      e.elementId = i;
      e.setId = i;
      elements[i-1] = e;
      Set s = new Set();
      s.setId = i;
      s.sets = new HashSet<Integer>();
      s.sets.add(i);
      sets[i-1] = s;
    }
    
    for(int i = 0; i < N; i++){
      int g1 = sin.nextInt();
      int b1 = sin.nextInt();
      union(g1,b1);
    }
    int min = 15001;
    int max = 0;
    for(int i = 0; i < 2*N; i++){
      if(sets[i].sets.size() > 1 && sets[i].sets.size() < min){
        min = sets[i].sets.size();
      }
      if(sets[i].sets.size() > max){
        max = sets[i].sets.size();
      }
    }
    System.out.println(min+" "+max);
  }
  
  void union(int g1, int b1){
      if(find(g1,b1)){
          
      }
      else{
      	int set1 = elements[g1-1].setId;
      	int set2 = elements[b1-1].setId;
      	Set s1 = sets[set1-1];
      	Set s2 = sets[set2-1];
      	if(s1.sets.size() > s2.sets.size()){
      	  Iterator<Integer> iterator = s2.sets.iterator();
      	  while (iterator.hasNext()){
      	    Integer e = iterator.next();
      	    s1.sets.add(e);
      	    elements[e-1].setId = set1;
      	  }
      	  s2.sets.clear();
      	}
      	else{
      	  Iterator<Integer> iterator = s1.sets.iterator();
      	  while (iterator.hasNext()){
      	    Integer e = iterator.next();
      	    s2.sets.add(e);
      	    elements[e-1].setId = set2;
      	  }
      	  s1.sets.clear();                
      	}
      }
  }
  
  boolean find(int g1,int b1){
    if(elements[g1-1].setId == elements[b1-1].setId){
      return true;
    }
    else{
      return false;
    }
  }
  
  public static void main(String[] args) {
    Solution s = new Solution();
    s.input();
  }
}
