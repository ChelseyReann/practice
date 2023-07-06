/* 
Given the head of a singly linked list, reverse the list, and return the reversed list.

Approach:
 create pointers to go through the linked list - prev, current & next
 set prev & next equal to null, set current equal to the head
 create a while loop to make sure current is true
 set next = current.next
 set current.next = prev
 set prev = current
 set current = next

 once existed from the while loop return prev
*/

function reverseLink(head){
    let prev = null
    let current = head
    let next = null

    while (current){
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

let head = [1,2,3,4,5]
let head2 = [1,2]
let head3 = []
console.log(reverseLink(head))
console.log(reverseLink(head2))
console.log(reverseLink(head3))

//time complexity - O(N)
//Space complexity - O(1)