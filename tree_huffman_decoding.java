import java.util.*;
 
abstract class Node implements Comparable<Node> {
  public  int frequency;
  public  char data;
  public  Node left, right; 
  public Node(int freq) { 
    frequency = freq; 
  }
  public int compareTo(Node tree) {
      return frequency - tree.frequency;
  }
}
 
class HuffmanLeaf extends Node {
  public HuffmanLeaf(int freq, char val) {
    super(freq);
    data = val;
  }
}
 
class HuffmanNode extends Node {
  public HuffmanNode(Node l, Node r) {
    super(l.frequency + r.frequency);
    left = l;
    right = r;
  }
}

class Decoding {
	void decode(String s, Node root) {
    StringBuffer sb = new StringBuffer();
    Node current = root;
    for(int i = 0; i < s.length(); i++){
      if(s.charAt(i) == '1'){
        current = current.right;
      } else {
        current = current.left;
      }
      if(current != null && current.left == null && current.right == null){
        sb.append(current.data);
        current = root;
      }
    }
    System.out.println(sb.toString());
  }
}

 
public class Solution {
    public static Node buildTree(int[] charFreqs) {
      PriorityQueue<Node> trees = new PriorityQueue<Node>();
      for (int i = 0; i < charFreqs.length; i++)
        if (charFreqs[i] > 0)
          trees.offer(new HuffmanLeaf(charFreqs[i], (char)i));
      assert trees.size() > 0;
      while (trees.size() > 1) {
        Node a = trees.poll();
        Node b = trees.poll();
        trees.offer(new HuffmanNode(a, b));
      }
      return trees.poll();
    }
  
    public static Map<Character,String> mapA=new HashMap<Character ,String>();
  
    public static void printCodes(Node tree, StringBuffer prefix) {
      
    assert tree != null;
      
      if (tree instanceof HuffmanLeaf) {
        HuffmanLeaf leaf = (HuffmanLeaf)tree;
        mapA.put(leaf.data,prefix.toString())
      } else if (tree instanceof HuffmanNode) {
        HuffmanNode node = (HuffmanNode)tree;
        prefix.append('0');
        printCodes(node.left, prefix);
        prefix.deleteCharAt(prefix.length()-1);
        prefix.append('1');
        printCodes(node.right, prefix);
        prefix.deleteCharAt(prefix.length()-1);
      }
    }
 
    public static void main(String[] args) {
      Scanner input = new Scanner(System.in);

      String test= input.next();
      int[] charFreqs = new int[256];
  
      for (char c : test.toCharArray())
        charFreqs[c]++;
      Node tree = buildTree(charFreqs);
      printCodes(tree, new StringBuffer());
      StringBuffer s = new StringBuffer();
  
      for(int i = 0; i < test.length(); i++) {
      	char c = test.charAt(i);
        s.append(mapA.get(c));
      }
  
      Decoding d = new Decoding();
      d.decode(s.toString(), tree);
    }
}