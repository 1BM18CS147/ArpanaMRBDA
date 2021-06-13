package wordcount
import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.spark.rdd.RDD.rddToPairRDDFunctions
import scala.collection.immutable.ListMap

object countword {

  val conf = new SparkConf().setAppName("WordCount").setMaster("local")
  conf.set("spark.driver.allowMultipleContexts", "true");
  val sc = new SparkContext(conf)
  def main (args: Array[String]) {

  val textFile = sc.textFile("Hello.txt")
  val counts = textFile.flatMap(line => line.split(" ")).map(word => (word, 1)).reduceByKey(_ + _)
  val sorted=ListMap(counts.collect.sortWith(_._2 > _._2):_*)// sort in descending order based on values
  println(sorted)
  for((k,v)<-sorted)
  {
    if(v>4)
    {
       print(k+",")
       print(v)
       println()
     }
  }
  }
}
