define("amber-app/App-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('App-Tests');
$core.packages["App-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["App-Tests"].transport = {"type":"amd","amdNamespace":"amber-app"};

$core.addClass('AppTest', $globals.TestCase, [], 'App-Tests');

});
