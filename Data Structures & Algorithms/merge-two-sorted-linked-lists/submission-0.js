class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // dummy node to anchor the start of the merged list
        let dummy = new ListNode(0);
        let tail = dummy;   // tail tracks the end of the merged list as we build it

        // walk both lists while both still have nodes
        while (list1 !== null && list2 !== null) {
            if (list1.val <= list2.val) {
                tail.next = list1;   // attach the smaller node
                list1 = list1.next;  // advance that list
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;        // move tail forward
        }

        // one list is exhausted — attach whatever remains of the other
        tail.next = list1 !== null ? list1 : list2;

        return dummy.next;   // dummy.next is the real head
    }
}